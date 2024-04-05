export const GALLERY_BASE_URL = "https://www.travelxism.com/destinasi-image/detail/";
export const TEAM_BASE_URL = "https://www.travelxism.com/storage/staff/";
export const SERVICE_BASE_URL = "https://www.travelxism.com/assets/img/";

export const getImageGallery = (url: string) => {
    return GALLERY_BASE_URL + url
}

export const getImageTeam = (url: string) => {
    return TEAM_BASE_URL + url
}

export const getImageService = (url: string) => {
    return SERVICE_BASE_URL + url
}
