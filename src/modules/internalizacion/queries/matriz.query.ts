import { useQuery } from "@tanstack/vue-query";

import { api } from "../api/axio.api"; // corrected typo 'ap[BLANK]i' to 'api'  <=== Solution to the error  */}
    
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