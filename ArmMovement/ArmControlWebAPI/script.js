function record() {
    var recognition = new webkitSpeechRecognition();
                recognition.lang = "ar";
                recognition.onresult = function(event) {
                S = document.getElementById('msg').value = event.results[0][0].transcript;}
                recognition.start();}



document.querySelector('#Connect').addEventListener('click', async () => {
    const port = await navigator.serial.requestPort(); 
                 
                await port.open({ baudRate: 921600}); 
                
                const textDecoder = new TextDecoderStream();
                const readableStreamClosed = port.readable.pipeTo(textDecoder.writable);
                const reader = textDecoder.readable.getReader();
                
                const textEncoder = new TextEncoderStream();
                const writableStreamClosed = textEncoder.readable.pipeTo(port.writable);
                const writer = textEncoder.writable.getWriter();
                var textarea = document.getElementById('AsConsole');
                
                await writer.write(S);
                S="undefined";
                  while (true){
                  if(S!=="undefined"){
                    await writer.write(S);
                    S="undefined";}
                    const { value, done } = await reader.read();
                  if (done){
                  reader.releaseLock();
                  break;}
                 
                  document.getElementById('AsConsole').innerHTML +=value;
                  textarea.scrollTop = textarea.scrollHeight;}});


//Background waves
var waves = new SineWaves({
    el: document.getElementById('waves'),
    speed: 5,
    ease: 'SineInOut',
    wavesWidth: '100%',
    waves: [
      { /* small-set wave 1 */
        timeModifier: 4,
        lineWidth: 1,
        amplitude: -25,
        wavelength: 25
      },
      { /* small-set wave 2 */
        timeModifier: 3,
        lineWidth: 1,
        amplitude: -20,
        wavelength: 25
      },
          { /* small-set wave 3 */
        timeModifier: 3,
        lineWidth: 1,
        amplitude: 40,
        wavelength: 40
      },
      { /* small-set wave 4 tall */
        timeModifier: 2,
        lineWidth: 1.5,
        amplitude: -50,
        wavelength: 60
      },
      { /* medium-set wave */
        timeModifier: 0.8,
        lineWidth: 1.8,
        amplitude: -210,
        wavelength: 140
      },
      { /* large-set wave */
        timeModifier: 0.4,
        lineWidth: 2,
        amplitude: -260,
        wavelength: 200
      }],
   
    // Called on window resize
    resizeEvent: function() {
      var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
      gradient.addColorStop(0,"rgba(145, 255, 230, 1)"); /* green */
      gradient.addColorStop(0.3,"rgba(255, 194, 194, .75)"); /* pink - coral */
      gradient.addColorStop(0.4,"rgba(255, 138, 138, 0.75)"); /* coral */
      gradient.addColorStop(0.6,"rgba(255, 221, 138, 0.75"); /* yellow */
      gradient.addColorStop(0.8,"rgba(232, 71, 71, 0.75"); /* light red */
      gradient.addColorStop(1,"rgba(208, 2, 27, 1"); /* red */
      
      var index = -1;
      var length = this.waves.length;
        while(++index < length){
        this.waves[index].strokeStyle = gradient;}
      // Clean Up
      index = void 0;
      length = void 0;
      gradient = void 0;}});  