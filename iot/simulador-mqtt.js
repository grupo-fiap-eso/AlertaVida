const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://broker.hivemq.com');

const TOPICO = 'alertavida/nivel';

client.on('connect', () => {
  console.log('✅ Conectado ao broker MQTT');

  setInterval(() => {
    const nivelAgua = Math.floor(Math.random() * 1000);
    const mensagem = JSON.stringify({
      sensor: 'sensor_nivel_01',
      nivel: nivelAgua,
      data: new Date().toISOString()
    });

    client.publish(TOPICO, mensagem);
    console.log(`📤 Enviado: ${mensagem}`);
  }, 5000);
});
