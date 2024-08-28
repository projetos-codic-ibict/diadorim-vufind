
document.addEventListener('DOMContentLoaded', function onDOMContentLoaded() {
//   console.log('O evento DOMContentLoaded foi disparado.'); 
  document.getElementById('download-btn').addEventListener('click', function onDownloadButtonClick() { 
    
    // console.log('Botão zip clicado!');
    const logos = document.querySelectorAll('.logo-image');
    const zip = new JSZip();
    const imgFolder = zip.folder("logomarcas");
    
    let promises = [];

    logos.forEach((logo) => {
      const imgUrl = logo.src;
      const filename = imgUrl.split('/').pop();
      
      promises.push(fetch(imgUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Erro ao buscar imagem: ${imgUrl}`);
          }
          return response.blob();
        })
        .then(blob => {
          imgFolder.file(filename, blob);
        })
        .catch(error => {
          console.error(error);
        })
      );
    });
    Promise.all(promises).then(() => {
      zip.generateAsync({ type: 'blob' }).then(content => {
        saveAs(content, 'logos.zip');
      }).catch(error => {
        console.error('Erro ao gerar o arquivo zip:', error);
      });
    }).catch(error => {
      console.error('Erro ao buscar todas as imagens:', error);
    });
    
  }, { once: true });
  
});


