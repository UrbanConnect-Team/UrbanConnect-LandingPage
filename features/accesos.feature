# language: es
Característica: Gestión de accesos y operaciones de UrbanConnect
  Como administrador de la comunidad
  Quiero gestionar accesos y tareas operativas frecuentes
  Para mantener informados a los residentes y proteger las instalaciones

  Antecedentes:
    Dado que el administrador se encuentra en la página de accesos

  @HU21
  Escenario: Registrar un paquete recibido y notificar al residente
    Cuando el administrador registra el residente, departamento, empresa, seguimiento y descripción del paquete
    Entonces el paquete queda pendiente de entrega
    Y se confirma que el residente fue notificado
    Y el registro se guarda en "uc_paquetes"

  @HU31
  Escenario: Reportar stock bajo de un insumo del gimnasio
    Dado que la cantidad actual de un insumo es menor o igual a su stock mínimo
    Cuando el administrador registra el nivel de stock
    Entonces el insumo se muestra con el estado "Stock bajo"
    Y se genera una alerta de reposición
    Y el registro se guarda en "uc_stock"

  @HU32
  Escenario: Generar un QR simulado para una visita
    Cuando el administrador registra los datos y la vigencia de una visita
    Entonces se genera una credencial con un QR simulado y código único
    Y la credencial muestra su fecha de expiración
    Y el registro se guarda en "uc_qr_visitas"

  @HU33
  Escenario: Registrar personal doméstico con horario autorizado
    Cuando el administrador registra la identidad, servicio, departamento, días y horario del personal
    Entonces la persona aparece como autorizada con su horario
    Y el registro se guarda en "uc_personal"

  @HU34
  Escenario: Programar una mudanza y proteger el ascensor
    Cuando el administrador registra el residente, departamento, tipo, fecha y horario de la mudanza
    Entonces la mudanza queda programada
    Y se genera una orden única para instalar y retirar la protección del ascensor
    Y el registro se guarda en "uc_mudanzas"
