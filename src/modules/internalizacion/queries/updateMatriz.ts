import { useMutation } from '@tanstack/vue-query'
import { api } from "../api/axio.api";
import { InternalizacionUpdate } from '../interfaces/UpdateInternalizacion';

export const useUpdateInternacionalizacion = (id) => {
    const mutation = useMutation({
        mutationFn: async (data: InternalizacionUpdate) => {
            try
            {
                const response = await api.put(`internacionalizacion/${id}`, {
                    SED_ID: data.SED_ID,
                    ICAR_ID: data.ICAR_ID,
                    INTER_CONV_CODIGO: data.INTER_CONV_CODIGO,
                    INTER_CONV_NOMBRE: data.INTER_CONV_NOMBRE,
                    INTER_CONTRAPARTE: data.INTER_CONTRAPARTE,
                    PAI_ID: data.PAI_ID,
                    PTIP_ID: data.PTIP_ID,
                    INTER_PAPELLIDO: data.INTER_PAPELLIDO,
                    INTER_PNOMBRE: data.INTER_PNOMBRE,
                    INTER_ACTIVIDADES: data.INTER_ACTIVIDADES,
                    INTER_FINICIO: data.INTER_FINICIO,
                    INTER_FFIN: data.INTER_FFIN,
                    ARE_ID: data.ARE_ID,
                    FIN_ID: data.FIN_ID,
                    INTER_ADOCENCIA: data.INTER_ADOCENCIA,
                    INTER_AINVESTIGACION: data.INTER_AINVESTIGACION,
                    INTER_AVINCULACION: data.INTER_AVINCULACION,
                    INTER_AADMINISTRATIVO: data.INTER_AADMINISTRATIVO,
                    INTER_AINTERNACIONALIZACION: data.INTER_AINTERNACIONALIZACION,
                    INTER_INDICADOR_1: data.INTER_INDICADOR_1,
                    INTER_INDICADOR_2: data.INTER_INDICADOR_2,
                    INTER_INDICADOR_3: data.INTER_INDICADOR_3,
                    INTER_INDICADOR_4: data.INTER_INDICADOR_4,
                    INTER_INDICADOR_5: data.INTER_INDICADOR_5,
                    INTER_INDICADOR_6: data.INTER_INDICADOR_6,
                    INTER_INDICADOR_7: data.INTER_INDICADOR_7,
                    INTER_INDICADOR_8: data.INTER_INDICADOR_8,
                    INTER_INDICADOR_9: data.INTER_INDICADOR_9,
                    INTER_EVIDENCIA: data.INTER_EVIDENCIA,
                    INTER_ESTADO: data.INTER_ESTADO
                });

                if (response.status !== 200){
                    throw new Error('Error al Actualizar');
                }
                return response.data;
            }
            catch(error){
                console.error('Error en la solicitud PUT: ', error);
                throw error;
            }
        }
    });
    return mutation
}