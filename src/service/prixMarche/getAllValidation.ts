import { AxiosInstense } from "../../helpers/AxiosInstense";
import { GET_ALL_VALIDATION_T } from "../../types";

const isDonneeComplete = (item: GET_ALL_VALIDATION_T): boolean =>
    !!item.marche && !!item.produit && !!item.region && !!item.prix;

export default async (): Promise<GET_ALL_VALIDATION_T[]> => {
    try {
        const { data } = await AxiosInstense.get('/prixMarche/getAllValidation', {
            params: { page: 0, size: 10000 },
        });

        if (Array.isArray(data)) {
            return (data as GET_ALL_VALIDATION_T[]).filter(isDonneeComplete);
        }

        if (data && Array.isArray(data.content)) {
            return (data.content as GET_ALL_VALIDATION_T[]).filter(isDonneeComplete);
        }

        return [];
    } catch (error) {
        console.error("Une erreur est survenue : ", error);
        return [];
    }
}