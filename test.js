const { createWorker } = require('tesseract.js');

const worker = createWorker({
    logger: m => console.log(m)
});

(async () => {
    await worker.load();
    await worker.loadLanguage('eng+kor');
    await worker.initialize('eng+kor');
    const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
    console.log(text);
    await worker.terminate();
})();