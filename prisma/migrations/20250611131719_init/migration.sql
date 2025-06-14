-- CreateEnum
CREATE TYPE "tipo_sangre_enum" AS ENUM ('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-');

-- CreateEnum
CREATE TYPE "tipo_area_enum" AS ENUM ('Cancha Sintetica', 'Piscina', 'Salon de Eventos', 'cancha uso Multiple', 'Zona de Parillada');

-- CreateEnum
CREATE TYPE "estado_pago_enum" AS ENUM ('Pendiente', 'Completado', 'Fallido', 'Reembolsado');

-- CreateEnum
CREATE TYPE "metodo_pago_enum" AS ENUM ('Tarjeta Credito', 'Tarjeta Debito', 'Efectivo', 'Transferencia Bancaria', 'PayPal', 'Otros');

-- CreateEnum
CREATE TYPE "estado_reserva_enum" AS ENUM ('Confirmada', 'Pendiente', 'Cancelada', 'Completada');

-- CreateTable
CREATE TABLE "persona" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "apellido" VARCHAR(100) NOT NULL,
    "cedula" VARCHAR(20) NOT NULL,
    "fecha_nacimiento" TIMESTAMP(3) NOT NULL,
    "direccion" VARCHAR(255) NOT NULL,
    "telefono" VARCHAR(20) NOT NULL,
    "nombres_padres" VARCHAR(255) NOT NULL,
    "nombres_madre" VARCHAR(255) NOT NULL,
    "alergias" TEXT,
    "tipo_sangre" "tipo_sangre_enum" NOT NULL,
    "correo" VARCHAR(100) NOT NULL,

    CONSTRAINT "persona_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "correo" VARCHAR(100) NOT NULL,
    "contraseña" VARCHAR(100) NOT NULL,
    "persona_id" INTEGER NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "convenios" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "descripcion" TEXT,
    "usuario_id" INTEGER NOT NULL,

    CONSTRAINT "convenios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "horario" (
    "id" SERIAL NOT NULL,
    "fecha" DATE NOT NULL,
    "hora_ini" TIME NOT NULL,
    "hora_final" TIME NOT NULL,
    "actividad" VARCHAR(100) NOT NULL,
    "descripcion" TEXT,

    CONSTRAINT "horario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cursos" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "descripcion" TEXT,
    "horario_id" INTEGER NOT NULL,

    CONSTRAINT "cursos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "areas_recreativas" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "tipo" "tipo_area_enum" NOT NULL,
    "descripcion" TEXT,
    "precio" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "areas_recreativas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pagos" (
    "id" SERIAL NOT NULL,
    "monto" DECIMAL(10,2) NOT NULL,
    "fecha_pago" DATE NOT NULL,
    "metodo" "metodo_pago_enum" NOT NULL,
    "estado" "estado_pago_enum" NOT NULL,

    CONSTRAINT "pagos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reservas" (
    "id" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "area_id" INTEGER NOT NULL,
    "horario_id" INTEGER NOT NULL,
    "estado" "estado_reserva_enum" NOT NULL,

    CONSTRAINT "reservas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inscripciones" (
    "id" SERIAL NOT NULL,
    "curso_id" INTEGER NOT NULL,
    "persona_id" INTEGER NOT NULL,

    CONSTRAINT "inscripciones_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "persona_cedula_key" ON "persona"("cedula");

-- CreateIndex
CREATE UNIQUE INDEX "persona_correo_key" ON "persona"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_correo_key" ON "usuario"("correo");

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_persona_id_fkey" FOREIGN KEY ("persona_id") REFERENCES "persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "convenios" ADD CONSTRAINT "convenios_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cursos" ADD CONSTRAINT "cursos_horario_id_fkey" FOREIGN KEY ("horario_id") REFERENCES "horario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservas" ADD CONSTRAINT "reservas_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservas" ADD CONSTRAINT "reservas_area_id_fkey" FOREIGN KEY ("area_id") REFERENCES "areas_recreativas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservas" ADD CONSTRAINT "reservas_horario_id_fkey" FOREIGN KEY ("horario_id") REFERENCES "horario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inscripciones" ADD CONSTRAINT "inscripciones_curso_id_fkey" FOREIGN KEY ("curso_id") REFERENCES "cursos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inscripciones" ADD CONSTRAINT "inscripciones_persona_id_fkey" FOREIGN KEY ("persona_id") REFERENCES "persona"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
