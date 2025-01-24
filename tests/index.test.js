const mongoose = require("mongoose");
const {
  crearContador,
  obtenerContadores,
  actualizarContador,
  obtenerContador,
  eliminarContador,
} = require("../controllers/appDummyController");
const Contador = require("../models/Contador");

// Mocks para simular req, res y next
jest.mock("../models/Contador");

describe("Controlador de Contadores", () => {
  let mockReq, mockRes, mockNext;

  beforeEach(() => {
    // Reiniciar mocks antes de cada prueba
    mockReq = {
      body: {},
      params: {},
    };
    mockRes = {
      json: jest.fn(),
      send: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
    mockNext = jest.fn();

    // Limpiar todos los mocks
    jest.clearAllMocks();
  });

  describe("crearContador", () => {
    it("debe crear un nuevo contador exitosamente", async () => {
      // Preparar datos de prueba
      mockReq.body = {
        usuario: "TestUser",
        numeroClicks: 10,
      };

      // Simular método save de Mongoose
      const mockContador = {
        _id: new mongoose.Types.ObjectId(),
        usuario: "TestUser",
        numeroClicks: 10,
        save: jest.fn().mockResolvedValue(this),
      };

      // Mockear constructor de Contador
      Contador.mockImplementation(() => mockContador);

      // Ejecutar método
      await crearContador(mockReq, mockRes);

      // Verificaciones
      expect(Contador).toHaveBeenCalledWith(mockReq.body);
      expect(mockContador.save).toHaveBeenCalled();
      expect(mockRes.send).toHaveBeenCalledWith(mockContador);
    });

    it("debe manejar errores al crear contador", async () => {
      // Simular error
      const errorMock = new Error("Error de creación");
      Contador.mockImplementation(() => ({
        save: jest.fn().mockRejectedValue(errorMock),
      }));

      // Ejecutar método
      await crearContador(mockReq, mockRes);

      // Verificaciones
      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.send).toHaveBeenCalledWith("Hubo un error en el POST");
    });
  });

  describe("obtenerContadores", () => {
    it("debe obtener todos los contadores", async () => {
      // Datos de prueba
      const mockContadores = [
        { usuario: "User1", numeroClicks: 5 },
        { usuario: "User2", numeroClicks: 10 },
      ];

      // Mockear método find de Mongoose
      Contador.find = jest.fn().mockResolvedValue(mockContadores);

      // Ejecutar método
      await obtenerContadores(mockReq, mockRes);

      // Verificaciones
      expect(Contador.find).toHaveBeenCalled();
      expect(mockRes.json).toHaveBeenCalledWith(mockContadores);
    });

    it("debe manejar errores al obtener contadores", async () => {
      // Simular error
      const errorMock = new Error("Error de obtención");
      Contador.find = jest.fn().mockRejectedValue(errorMock);

      // Ejecutar método
      await obtenerContadores(mockReq, mockRes);

      // Verificaciones
      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.send).toHaveBeenCalledWith(
        "Hubo un error obteniendo contadores"
      );
    });
  });

  describe("actualizarContador", () => {
    it("debe actualizar un contador existente", async () => {
      // Preparar datos de prueba
      const contadorId = new mongoose.Types.ObjectId();
      mockReq.params.id = contadorId;
      mockReq.body = {
        usuario: "UpdatedUser",
        numeroClicks: 20,
      };

      // Contador existente
      const contadorExistente = {
        _id: contadorId,
        usuario: "OldUser",
        numeroClicks: 10,
      };

      // Mockear métodos de Mongoose
      Contador.findById = jest.fn().mockResolvedValue(contadorExistente);
      Contador.findOneAndUpdate = jest.fn().mockResolvedValue({
        ...contadorExistente,
        ...mockReq.body,
      });

      // Ejecutar método
      await actualizarContador(mockReq, mockRes);

      // Verificaciones
      expect(Contador.findById).toHaveBeenCalledWith(contadorId);
      expect(Contador.findOneAndUpdate).toHaveBeenCalledWith(
        { _id: contadorId },
        expect.objectContaining(mockReq.body),
        { new: true }
      );
      expect(mockRes.json).toHaveBeenCalledWith(
        expect.objectContaining(mockReq.body)
      );
    });

    it("debe manejar contador no encontrado", async () => {
      // Preparar datos de prueba
      mockReq.params.id = new mongoose.Types.ObjectId();

      // Mockear método findById para retornar null
      Contador.findById = jest.fn().mockResolvedValue(null);

      // Ejecutar método
      await actualizarContador(mockReq, mockRes);

      // Verificaciones
      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({
        msg: "No existe el contador",
      });
    });
  });

  describe("obtenerContador", () => {
    it("debe obtener un contador por ID", async () => {
      // Preparar datos de prueba
      const contadorId = new mongoose.Types.ObjectId();
      mockReq.params.id = contadorId;

      // Contador de prueba
      const contadorMock = {
        _id: contadorId,
        usuario: "TestUser",
        numeroClicks: 15,
      };

      // Mockear método findById de Mongoose
      Contador.findById = jest.fn().mockResolvedValue(contadorMock);

      // Ejecutar método
      await obtenerContador(mockReq, mockRes);

      // Verificaciones
      expect(Contador.findById).toHaveBeenCalledWith(contadorId);
      expect(mockRes.json).toHaveBeenCalledWith(contadorMock);
    });

    it("debe manejar contador no encontrado", async () => {
      // Preparar datos de prueba
      mockReq.params.id = new mongoose.Types.ObjectId();

      // Mockear método findById para retornar null
      Contador.findById = jest.fn().mockResolvedValue(null);

      // Ejecutar método
      await obtenerContador(mockReq, mockRes);

      // Verificaciones
      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({
        msg: "No existe el contador",
      });
    });
  });

  describe("eliminarContador", () => {
    it("debe eliminar un contador existente", async () => {
      // Preparar datos de prueba
      const contadorId = new mongoose.Types.ObjectId();
      mockReq.params.id = contadorId;

      // Contador de prueba
      const contadorMock = {
        _id: contadorId,
        usuario: "TestUser",
        numeroClicks: 15,
      };

      // Mockear métodos de Mongoose
      Contador.findById = jest.fn().mockResolvedValue(contadorMock);
      Contador.findOneAndDelete = jest.fn().mockResolvedValue(contadorMock);

      // Ejecutar método
      await eliminarContador(mockReq, mockRes);

      // Verificaciones
      expect(Contador.findById).toHaveBeenCalledWith(contadorId);
      expect(Contador.findOneAndDelete).toHaveBeenCalledWith({
        _id: contadorId,
      });
      expect(mockRes.json).toHaveBeenCalledWith({
        msg: "contador eliminado con exito",
      });
    });

    it("debe manejar contador no encontrado al eliminar", async () => {
      // Preparar datos de prueba
      mockReq.params.id = new mongoose.Types.ObjectId();

      // Mockear método findById para retornar null
      Contador.findById = jest.fn().mockResolvedValue(null);

      // Ejecutar método
      await eliminarContador(mockReq, mockRes);

      // Verificaciones
      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({
        msg: "No existe el contador",
      });
    });
  });
});
