<template>
  <div>
    <button class="btn" @click="downloadFile">View My Résumé</button>
  </div>
</template>

<script>
export default {
  name: 'DownloadFile',
  // props: {
  //   fileUrl: String,
  //   fileName: String
  // },
  // methods: {
  //   downloadFile() {
  //     const link = document.createElement('a')
  //     link.href = this.fileUrl
  //     link.target = '_blank'
  //     link.download = this.fileName

  //     document.body.appendChild(link)
  //     link.click()
  //     document.body.removeChild(link)
  //   }
  // }

  methods: {
  downloadFile() {
    const fileUrl = '/Abdul-Hafiz-Resume.docx';

    fetch(fileUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then(blob => {
        // Create a link element
        const link = document.createElement('a');

        // Create a blob URL for the file content
        const blobUrl = window.URL.createObjectURL(blob);

        // Set the link's href and download attributes
        link.href = blobUrl;
        link.download = 'Abdul-Hafiz Résumé.docx';

        // Append the link to the document body
        document.body.appendChild(link);

        // Trigger a click event on the link to start the download
        link.click();

        // Remove the link and revoke the blob URL after the download is initiated
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
      })
      .catch(error => {
        console.error('Error downloading the file:', error);
      });
  }
}

}

</script>