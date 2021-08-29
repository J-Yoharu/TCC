import {
  mdiPdfBox,
  mdiFolderImage,
  mdiFileWordBox,
  mdiFileExcelBox,
  mdiLanguageHtml5,
  mdiZipBox,
  mdiXml,
  mdiCodeBraces,
  mdiFile,
  mdiMovie,
  mdiMusicBoxOutline,
  mdiDatabase,
  mdiFormatText,
} from "@mdi/js";

export const thumbNails = [
  {
    component: "media-iframe",
    name: "PDF",
    color: "red",
    icon: mdiPdfBox,
    preview: false,
    fullScreen: true,
    mimeTypes: ["pdf", "octet-stream"],
  },

  {
    component: "media-xml",
    name: "XML",
    color: "orange",
    icon: mdiXml,
    preview: false,
    fullScreen: false,
    mimeTypes: ["xml"],
  },

  {
    component: "media-code",
    name: "Arquivo de Código",
    preview: false,
    fullScreen: false,
    mimeTypes: ["json", "javascript", "php", "java-archive", "plain"],
    color: "black",
    icon: mdiCodeBraces,
  },

  {
    component: "media-audio",
    name: "Arquivo de Audio",
    color: "blue",
    icon: mdiMusicBoxOutline,
    preview: true,
    fullScreen: false,
    mimeTypes: ["audio"],
  },

  {
    component: "media-video",
    name: "Arquivo de Vídeo",
    color: "blue",
    icon: mdiMovie,
    preview: false,
    fullScreen: true,
    mimeTypes: ["video"],
  },

  {
    component: "media-text",
    name: "Arquivo de texto",
    color: "blue",
    icon: mdiFormatText,
    preview: false,
    fullScreen: false,
    mimeTypes: ["x-x509-ca-cert", "txt"],
  },

  {
    component: "media-document_text",
    name: "Documento de texto",
    color: "blue",
    icon: mdiFileWordBox,
    preview: false,
    fullScreen: false,
    mimeTypes: ["wordprocessingml", "msword"],
  },

  {
    component: "media-plan",
    name: "Planilha",
    color: "green",
    icon: mdiFileExcelBox,
    preview: false,
    fullScreen: false,
    mimeTypes: ["spreadsheet", "spreadsheetml", "sheet", "excel"],
  },

  {
    component: "media-html",
    name: "HTML",
    color: "orange",
    icon: mdiLanguageHtml5,
    preview: false,
    fullScreen: false,
    mimeTypes: ["html", "xhtml"],
  },

  {
    component: "media-compress",
    name: "Arquivo Compactado",
    color: "grey",
    icon: mdiZipBox,
    preview: false,
    fullScreen: false,
    mimeTypes: [
      "zip",
      "rar",
      "x-rar-compressed",
      "x-7z-compressed",
      "vnd.android.package-archive",
      "apk",
      "7z",
      "xz",
      "tar",
      "x-tar",
    ],
  },

  {
    component: "media-sql",
    name: "Arquivo SQL",
    color: "grey",
    icon: mdiDatabase,
    preview: false,
    fullScreen: false,
    mimeTypes: ["sql"],
  },

  {
    component: "media-image",
    name: "Arquivo de Imagem",
    color: "red",
    icon: mdiFolderImage,
    preview: true,
    fullScreen: false,
    mimeTypes: [
      "png",
      "jpg",
      "gif",
      "bmp",
      "psd",
      "svg",
      "ttf",
      "exif",
      "jpeg",
      "jfif",
    ],
  },
];

export const downloadFile = (url, name) => {
  const data = url;

  const link = document.createElement("a");
  link.href = data;
  link.download = name;

  // this is necessary as link.click() does not work on the latest firefox
  link.dispatchEvent(
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    })
  );

  setTimeout(() => {
    // For Firefox it is necessary to delay revoking the ObjectURL
    window.URL.revokeObjectURL(data);
    link.remove();
  }, 100);
};

export const getThumbNail = (type) => {
  let response = null;

  thumbNails.forEach((thumb) => {
    thumb.mimeTypes.forEach((format) => {
      if (type.includes(format)) {
        response = thumb;
      }
    });
  });

  if (response != null) {
    return response;
  }

  return {
    name: `Arquivo ${type}`,
    color: "black",
    icon: mdiFile,
  };
};

export const prepareFile = (file) => {
  return file == null
    ? null
    : {
        id: file.id,
        name: file.name,
        url: file.url,
        type: file.mimeType,
        thumbnail: getThumbNail(file.mimeType),
      };
};

export default {
  thumbNails,
  prepareFile,
  downloadFile,
};
