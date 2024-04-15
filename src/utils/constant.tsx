export const formatCurrency = (amount: string) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(stringToNumber(amount));
};

export const stringToNumber = (value: string): number => {
    const numericString = value.replace(/[^0-9.-]+/g, '');

    const numberValue = parseFloat(numericString);

    return numberValue;
};

export const GALLERY_BASE_URL = "https://www.travelxism.com/destinasi-image/detail/";
export const TEAM_BASE_URL = "https://www.travelxism.com/storage/staff/";
export const SERVICE_BASE_URL = "https://www.travelxism.com/assets/img/";
export const NEWS_BASE_URL = "https://www.travelxism.com/storage/thumbnailberita/";
export const NEWS_DETAIL_BASE_URL = "https://www.travelxism.com/destinasi-image/detail/";
export const PARTNER_BASE_URL = "https://www.travelxism.com/storage/patner/";
export const TESTIMONI_BASE_URL = "https://www.travelxism.com/storage/testimoni/";
export const TOUR_BASE_URL = "https://www.travelxism.com/storage/tourpackageimg/";
export const SDGS_BASE_URL = "https://www.travelxism.com/assets/img/sgds/";

export const getImageGallery = (url: string) => {
    return GALLERY_BASE_URL + url
}

export const getImageTeam = (url: string) => {
    return TEAM_BASE_URL + url
}

export const getImageService = (url: string) => {
    return SERVICE_BASE_URL + url
}

export const getImageNews = (url: string) => {
    return NEWS_BASE_URL + url
}

export const getImageNewsDetail = (url: string) => {
    return NEWS_DETAIL_BASE_URL + url
}

export const getImagePartner = (url: string) => {
    return PARTNER_BASE_URL + url
}

export const getImageTestimoni = (url:string)=> {
    return TESTIMONI_BASE_URL + url
}

export const getImageTour = (url:string) => {
    return TOUR_BASE_URL + url
}

export const getImageSdgs = (url:string) => {
    return SDGS_BASE_URL + url
}
 