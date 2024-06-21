import { useQuery } from "@tanstack/vue-query";

import { api } from "../api/axio.api";

import { Internalizacion } from "../interfaces/internacionalizacion"; 

export const useInternalizacionQuery = () => {
    const {data, isSuccess, isError, error, isLoading } = useQuery<Internalizacion>({
        queryKey: ['internacionalizacion'],
        queryFn: async () => {
            const response = await api.get('internacionalizacion');
            return response.data;
        }
    }) 
    return { data, isSuccess, isError, error, isLoading }
}