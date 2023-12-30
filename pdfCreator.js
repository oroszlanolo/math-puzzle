
function download() {
    const element = document.getElementById('to-print');
    var opt = {
        // margin:       1,
        filename:     `${solution}.pdf`,
        image:        { type: 'jpeg', quality: 1 },
      };
    var worker = html2pdf().set(opt).from(element).save();
}