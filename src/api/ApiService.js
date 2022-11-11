// Your wallet address
const walletID = "0x47582700824c3fab000d6fa549c50c62fe2ca47b";

// api url
export const openSeaAPI = `https://api.opensea.io/api/v1/assets?owner=${walletID}`;
export const openSeaCollections = `https://api.opensea.io/api/v1/assets?owner=${walletID}`;

export const raribleAPI = `https://api.rarible.org/v0.1/items/byCreator?creator=ETHEREUM:${walletID}`;
export const raribleCollections = ``;