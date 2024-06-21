import { useQuery } from "@tanstack/vue-query";

import { api } from "../api/axio.api"; // corrected typo 'ap[BLANK]i' to 'api'  <=== Solution to the error  */}
    
import { Area, Codigo, Paises, Sedes } from "../interfaces/informacion";  
    
export const useAreaQuery = () => {
    const {data, isSuccess, isError, error, isLoading } = useQuery<Area>({
        queryKey: ['interareaconocimiento'],
        queryFn: async () => {
            const response = await api.get('interareaconocimiento');
            return response.data;
        }
    }) 
    return { data, isSuccess, isError, error, isLoading }
}

export const useCodigoQuery = () => {
    const {data, isSuccess, isError, error, isLoading } = useQuery<Codigo>({
        queryKey: ['intercarrera'],
        queryFn: async () => {
            const response = await api.get('intercarrera');
            return response.data;
        }
    }) 
    return { data, isSuccess, isError, error, isLoading }
}

export const useSedeQuery = () => {
    const {data, isSuccess, isError, error, isLoading } = useQuery<Sedes>({
        queryKey: ['intersede'],
        queryFn: async () => {
            const response = await api.get('intersede');
            return response.data;
        }
    }) 
    return { data, isSuccess, isError, error, isLoading }
}

export const usePaisesQuery = () => {
    const {data, isSuccess, isError, error, isLoading } = useQuery<Paises>({
        queryKey: ['inter-pais'],
        queryFn: async () => {
            const response = await api.get('inter-pais');
            return response.data;
        }
    }) 
    return { data, isSuccess, isError, error, isLoading }
}

export const useTipoParticipanteQuery = () => {
    const {data, isSuccess, isError, error, isLoading } = useQuery<Paises>({
        queryKey: ['intertipoparticipante'],
        queryFn: async () => {
            const response = await api.get('intertipoparticipante');
            return response.data;
        }
    }) 
    return { data, isSuccess, isError, error, isLoading }
}

export const useFinanciamientoQuery = () => {
    const {data, isSuccess, isError, error, isLoading } = useQuery<Paises>({
        queryKey: ['inter-financiamiento'],
        queryFn: async () => {
            const response = await api.get('inter-financiamiento');
            return response.data;
        }
    }) 
    return { data, isSuccess, isError, error, isLoading }
}