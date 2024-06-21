import { useQuery } from "@tanstack/vue-query";

import { api } from "../api/axio.api"; // corrected typo 'ap[BLANK]i' to 'api'  <=== Solution to the error  */}
    
import { InternalizacionId } from "../interfaces/internaliacionId";  
    
export const useInternalizacionIdQuery = (id: string | string[]) => {
    const {data, isSuccess, isError, error, isLoading } = useQuery<InternalizacionId>({
        queryKey: ['internacionalizacion', {id}],
        queryFn: async (id) => {
            const response = await api.get<InternalizacionId>(`internacionalizacion/${id.queryKey[1].id}`);
            console.log(response.data);
            return response.data;
        }
    }) 
    return { data, isSuccess, isError, error, isLoading }
}