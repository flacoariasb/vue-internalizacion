<template>
    <div v-if="isLoading">cargando ... </div>
    <div v-else id="content" class="col-lg-12 col-sm-12">
        <form @submit.prevent="submit">
            <div>
                <div class="box col-md-12">
                    <div class="box-inner">
                        <div class="box-header well" data-original-title="">
                            <h2><img src="../svg/icon-star.svg"
                                    style="width:3%; display: inline-block;  position: relative; bottom: 2px; margin-left: 8px;">{{
                                route.params.id ? `Editar entrada ${route.params.id}` : 'Ingresar Nuevo' }}</h2>
                        </div>
                        <div class="box-content">
                            <div class="box col-md-4 text-center" style="margin-bottom:30px;">
                                <div class="box-inner">
                                    <div class="box-header well" style="display: flex; justify-content: center;">
                                        <h2>Sede</h2>
                                    </div>
                                </div>
                                <select v-model="sede" id="sede" name="sede" class="form-control"
                                    :class="{ 'seleccion-invalida': sede === 0 }"
                                    style="max-width:100%; display: inline-block; margin-top:5px;">
                                    <option value="0">Seleccione una opción</option>
                                    <option v-for="item in dataSede" :value="item.SED_ID">{{ item.SED_SEDE }}</option>
                                </select>
                            </div>
                            <div class="box col-md-4 text-center" style="margin-bottom:30px;">
                                <div class="box-inner">
                                    <div class="box-header well" style="display: flex; justify-content: center;">
                                        <h2>Código de carrera</h2>
                                    </div>
                                </div>
                                <select v-model="codigo_carrera" id="codigo_carrera" name="codigo_carrera"
                                    :class="{ 'seleccion-invalida': codigo_carrera === 0 }" class="form-control"
                                    style="max-width:100%; display: inline-block; margin-top:5px;">
                                    <option value="0">Seleccione una opción</option>
                                    <option v-for="item in dataCodigo" :value="item.ICAR_ID">{{ item.ICAR_CODIGO }}
                                    </option>
                                    <!-- <option v-for="item in data.codigo" :value="item.ICAR_ID" >{{ item.ICAR_CODIGO }}</option> -->
                                </select>
                            </div>
                            <div class="box col-md-4 text-center" style="margin-bottom:30px;">
                                <div class="box-inner">
                                    <div class="box-header well" style="display: flex; justify-content: center;">
                                        <h2>Código de convenio internacional</h2>
                                    </div>
                                </div>
                                <input v-model="convenio_codigo" class="form-control" type="text" id="convenio_codigo"
                                    name="convenio_codigo" placeholder="Código de convenio" required
                                    style="margin-top:5px;">
                            </div>
                            <div class="box col-md-4 text-center" style="margin-bottom:30px;">
                                <div class="box-inner">
                                    <div class="box-header well" style="display: flex; justify-content: center;">
                                        <h2>Nombre del convenio / convocatoria / evento</h2>
                                    </div>
                                </div>
                                <input v-model="convenio_nombre" class="form-control" type="text" id="convenio_nombre"
                                    name="convenio_nombre" placeholder="Nombre del convenio" required
                                    style="margin-top:5px;">
                            </div>
                            <div class="box col-md-4 text-center" style="margin-bottom:30px;">
                                <div class="box-inner">
                                    <div class="box-header well" style="display: flex; justify-content: center;">
                                        <h2>Contraparte internacional</h2>
                                    </div>
                                </div>
                                <input v-model="contraparte" class="form-control" type="text" id="contraparte"
                                    name="contraparte" placeholder="Contraparte internacional" required
                                    style="margin-top:5px;">
                            </div>
                            <div class="box col-md-4 text-center" style="margin-bottom:30px;">
                                <div class="box-inner">
                                    <div class="box-header well" style="display: flex; justify-content: center;">
                                        <h2>País</h2>
                                    </div>
                                </div>
                                <select v-model="pais" id="pais" name="pais" required class="form-control"
                                    :class="{ 'seleccion-invalida': pais === 0 }"
                                    style="max-width:100%; display: inline-block; margin-top:5px;">
                                    <option value="0">Seleccione una opción</option>
                                    <option v-for="item in dataPais" :value="item.PAI_ID">{{ item.PAI_PAIS }}</option>
                                </select>
                            </div>
                            <div class="box col-md-4 text-center" style="margin-bottom:30px;">
                                <div class="box-inner">
                                    <div class="box-header well" style="display: flex; justify-content: center;">
                                        <h2>Tipo del movilizado participante / ejecutor</h2>
                                    </div>
                                </div>
                                <select v-model="participante" id="tipo_participante" name="tipo_participante" required
                                    :class="{ 'seleccion-invalida': participante === 0 }" class="form-control"
                                    style="max-width:100%; display: inline-block; margin-top:5px;">
                                    <option value="0">Seleccione una opción</option>
                                    <option v-for="item in dataTipoParticipante" :value="item.PTIP_ID">{{ item.PTIP_TIPO
                                        }}
                                    </option>
                                </select>
                            </div>
                            <div class="box col-md-4 text-center" style="margin-bottom:30px;">
                                <div class="box-inner">
                                    <div class="box-header well" style="display: flex; justify-content: center;">
                                        <h2>Apellido(s) del movilizado / participante / ejecutor</h2>
                                    </div>
                                </div>
                                <input v-model="apellido_participante" class="form-control" type="text"
                                    id="apellido_participante" name="apellido_participante" placeholder="Apellidos"
                                    required style="margin-top:5px;">
                            </div>
                            <div class="box col-md-4 text-center" style="margin-bottom:30px;">
                                <div class="box-inner">
                                    <div class="box-header well" style="display: flex; justify-content: center;">
                                        <h2>Nombre(s) del movilizado / participante / ejecutor</h2>
                                    </div>
                                </div>
                                <input v-model="nombre_participante" class="form-control" type="text"
                                    id="nombre_participante" name="nombre_participante" placeholder="Nombres" required
                                    style="margin-top:5px;">
                            </div>
                            <div class="box col-md-4 text-center" style="margin-bottom:30px;">
                                <div class="box-inner">
                                    <div class="box-header well" style="display: flex; justify-content: center;">
                                        <h2>Actividades</h2>
                                    </div>
                                </div>
                                <textarea v-model="actividades" rows="1" class="form-control" id="actividades"
                                    name="actividades" placeholder="Actividades" style="margin-top:5px;"
                                    required></textarea>
                            </div>
                            <div class="box col-md-4 text-center" style="margin-bottom:30px;">
                                <div class="box-inner">
                                    <div class="box-header well" style="display: flex; justify-content: center;">
                                        <h2>Fecha de inicio</h2>
                                    </div>
                                </div>
                                <input v-model="fecha_inicio" class="form-control" type="date" id="fecha_inicio"
                                    name="fecha_inicio" style="margin-top:5px;" required>
                            </div>
                            <div class="box col-md-4 text-center" style="margin-bottom:30px;">
                                <div class="box-inner">
                                    <div class="box-header well" style="display: flex; justify-content: center;">
                                        <h2>Fecha de finalización</h2>
                                    </div>
                                </div>
                                <input v-model="fecha_fin" class="form-control" type="date" id="fecha_fin"
                                    name="fecha_fin" style="margin-top:5px;" required>
                            </div>
                            <div class="box col-md-4 text-center" style="margin-bottom:30px;">
                                <div class="box-inner">
                                    <div class="box-header well" style="display: flex; justify-content: center;">
                                        <h2>Área de conocimiento</h2>
                                    </div>
                                </div>
                                <select v-model="area" id="area" name="area" required class="form-control"
                                    :class="{ 'seleccion-invalida': area === 0 }"
                                    style="max-width:100%; display: inline-block; margin-top:5px;">
                                    <option value="0">Seleccione una opción</option>
                                    <option v-for="item in data" :value="item.ARE_ID">{{ item.ARE_CODIGO }} ({{
                                        item.ARE_DESCRIPCION }})</option>
                                </select>
                            </div>
                            <div class="box col-md-4 text-center" style="margin-bottom:30px;">
                                <div class="box-inner">
                                    <div class="box-header well" style="display: flex; justify-content: center;">
                                        <h2>Financiamiento</h2>
                                    </div>
                                </div>
                                <select v-model="financiamiento" id="financiamiento" name="financiamiento" required
                                    :class="{ 'seleccion-invalida': financiamiento === 0 }" class="form-control"
                                    style="max-width:100%; display: inline-block; margin-top:5px;">
                                    <option value="0">Seleccione una opción</option>
                                    <option v-for="item in dataFinanciamiento" :value="item.FIN_ID">{{ item.FIN_TIPO }}
                                    </option>
                                </select>
                            </div>
                            <div class="box col-md-4 text-center" style="margin-bottom:30px;">
                                <div class="box-inner">
                                    <div class="box-header well" style="display: flex; justify-content: center;">
                                        <h2>Evidencia</h2>
                                    </div>
                                </div>
                                <textarea v-model="evidencia" rows="1" class="form-control" id="evidencia"
                                    name="evidencia" placeholder="Evidencia" style="margin-top:5px;"
                                    required></textarea>
                            </div>
                            <div class="box col-md-12 text-center" style="margin-bottom:30px;">
                                <div class="box-inner">
                                    <div class="box-header well" style="display: flex; justify-content: center;">
                                        <h2>Aporte a función sustantiva</h2>
                                    </div>
                                </div>
                                <table class="table table-striped table-bordered responsive text-center">
                                    <thead>
                                        <tr>
                                            <th style="text-align: center"><label for="a_docencia">Docencia</label></th>
                                            <th style="text-align: center"><label
                                                    for="a_investigacion">Investigación</label></th>
                                            <th style="text-align: center"><label
                                                    for="a_vinculacion">Vinculación</label>
                                            </th>
                                            <th style="text-align: center"><label for="a_administrativo">Desarrollo
                                                    docente / administrativo</label></th>
                                            <th style="text-align: center"><label
                                                    for="a_internacionalizacion">Internacionalización</label></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style="text-align: center"><input v-model="a_docencia" type="checkbox"
                                                    id="a_docencia" name="a_docencia" value="X"></td>
                                            <td style="text-align: center"><input v-model="a_investigacion"
                                                    type="checkbox" id="a_investigacion" name="a_investigacion"></td>
                                            <td style="text-align: center"><input v-model="a_vinculacion"
                                                    type="checkbox" id="a_vinculacion" name="a_vinculacion" value="X">
                                            </td>
                                            <td style="text-align: center"><input v-model="a_administrativo"
                                                    type="checkbox" id="a_administrativo" name="a_administrativo"
                                                    value="X"></td>
                                            <td style="text-align: center"><input v-model="a_internacionalizacion"
                                                    type="checkbox" id="a_internacionalizacion"
                                                    name="a_internacionalizacion" value="X">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="box col-md-12 text-center">
                                <div class="box-inner">
                                    <div class="box-header well" style="display: flex; justify-content: center;">
                                        <h2>Indicadores</h2>
                                    </div>
                                </div>
                                <table class="table table-striped table-bordered responsive">
                                    <thead>
                                        <tr>
                                            <th style="text-align: center"><label for="indicador_1">1<br>Mov.<br>est.
                                                    entr.</label></th>
                                            <th style="text-align: center"><label for="indicador_2">2<br>Mov.<br>est.
                                                    salien.</label></th>
                                            <th style="text-align: center"><label for="indicador_3">3<br>Mov.<br>doc.
                                                    entr.</label></th>
                                            <th style="text-align: center"><label for="indicador_4">4<br>Mov.<br>doc.
                                                    salie.</label></th>
                                            <th style="text-align: center"><label for="indicador_5">5<br>Mov.<br>adm.
                                                    salie.</label></th>
                                            <th style="text-align: center"><label for="indicador_6">6<br>Convenio
                                                    efect.</label></th>
                                            <th style="text-align: center"><label for="indicador_7">7<br>Prod.
                                                    científic.</label></th>
                                            <th style="text-align: center"><label for="indicador_8">8<br>Intern.
                                                    currículo (COIL, IDV, Telecolaboración)</label></th>
                                            <th style="text-align: center"><label for="indicador_9">9<br>Intern. en casa
                                                    (interculturalidad en el campus)</label></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style="text-align: center"><input v-model="indicador_1" type="checkbox"
                                                    id="indicador_1" name="indicador_1"></td>
                                            <td style="text-align: center"><input v-model="indicador_2" type="checkbox"
                                                    id="indicador_2" name="indicador_2" value="X"></td>
                                            <td style="text-align: center"><input v-model="indicador_3" type="checkbox"
                                                    id="indicador_3" name="indicador_3" value="X"></td>
                                            <td style="text-align: center"><input v-model="indicador_4" type="checkbox"
                                                    id="indicador_4" name="indicador_4" value="X"></td>
                                            <td style="text-align: center"><input v-model="indicador_5" type="checkbox"
                                                    id="indicador_5" name="indicador_5" value="X"></td>
                                            <td style="text-align: center"><input v-model="indicador_6" type="checkbox"
                                                    id="indicador_6" name="indicador_6" value="X"></td>
                                            <td style="text-align: center"><input v-model="indicador_7" type="checkbox"
                                                    id="indicador_7" name="indicador_7" value="X"></td>
                                            <td style="text-align: center"><input v-model="indicador_8" type="checkbox"
                                                    id="indicador_8" name="indicador_8" value="X"></td>
                                            <td style="text-align: center"><input v-model="indicador_9" type="checkbox"
                                                    id="indicador_9" name="indicador_9" value="X"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <button type="submit" class="btn btn-success" style="display: block; margin: 0 auto;">{{
                                route.params.id ? 'Actualizar' : 'Enviar' }}</button>
                            <!-- </form> -->
                            <button @click.prevent="regresar" class="btn btn-primary">Regresar</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { useAreaQuery, useFinanciamientoQuery, usePaisesQuery, useSedeQuery, useTipoParticipanteQuery, useCodigoQuery } from '../queries/info.query'
const { data, isLoading } = useAreaQuery()
const { data: dataCodigo, isLoading: isLoadingCodigo } = useCodigoQuery()
const { data: dataSede, isLoading: isLoadingSede } = useSedeQuery()
const { data: dataPais, isLoading: isLoadingPais } = usePaisesQuery()
const { data: dataTipoParticipante, isLoading: IsLoadingTipoPartcipante } = useTipoParticipanteQuery()
const { data: dataFinanciamiento, isLoading: isLoadingaFinanciamiento } = useFinanciamientoQuery()


import { ref, onMounted, watchEffect } from 'vue';
import { useInsertInternacionalizacion } from '../queries/insertMatriz';
import { useUpdateInternacionalizacion } from '../queries/updateMatriz';
import { useRouter, useRoute } from 'vue-router';
// Importa los hooks necesarios
import { useInternalizacionIdQuery } from '../queries/matrizId.query';

// import { useQueryClient } from '@tanstack/vue-query';

const router = useRouter();
const route = useRoute();
const idItem = route.params.id

// const formulario = ref({
//   nombre: '',
// otros campos del formulario
// });

const regresar = () => {
    router.push({ name: 'matriz', replace: true });
}

const { data: dataObj, isLoading: isLoadingId } = useInternalizacionIdQuery(idItem);
watchEffect(() => {
    try {
        console.log(dataObj.value?.INTER_CONTRAPARTE)
        sede.value = dataObj.value?.SED_ID || 0;
        codigo_carrera.value = dataObj.value?.ICAR_ID || 0;
        convenio_codigo.value = dataObj.value?.INTER_CONV_CODIGO;
        convenio_nombre.value = dataObj.value?.INTER_CONV_NOMBRE;
        contraparte.value = dataObj.value?.INTER_CONTRAPARTE;
        pais.value = dataObj.value?.PAI_ID || 0;
        participante.value = dataObj.value?.PTIP_ID || 0;
        apellido_participante.value = dataObj.value?.INTER_PAPELLIDO;
        nombre_participante.value = dataObj.value?.INTER_PNOMBRE;
        actividades.value = dataObj.value?.INTER_ACTIVIDADES;
        fecha_inicio.value = dataObj.value?.INTER_FINICIO;
        fecha_fin.value = dataObj.value?.INTER_FFIN;
        area.value = dataObj.value?.ARE_ID || 0;
        financiamiento.value = dataObj.value?.FIN_ID || 0;
        a_docencia.value = dataObj.value?.INTER_ADOCENCIA === "X" ? true : false;
        a_investigacion.value = dataObj.value?.INTER_AINVESTIGACION === "X" ? true : false;
        a_vinculacion.value = dataObj.value?.INTER_AVINCULACION === "X" ? true : false;
        a_administrativo.value = dataObj.value?.INTER_AADMINISTRATIVO === "X" ? true : false;
        a_internacionalizacion.value = dataObj.value?.INTER_AINTERNACIONALIZACION === "X" ? true : false;
        indicador_1.value = dataObj.value?.INTER_INDICADOR_1 === "X" ? true : false;
        indicador_2.value = dataObj.value?.INTER_INDICADOR_2 === "X" ? true : false;
        indicador_3.value = dataObj.value?.INTER_INDICADOR_3 === "X" ? true : false;
        indicador_4.value = dataObj.value?.INTER_INDICADOR_4 === "X" ? true : false;
        indicador_5.value = dataObj.value?.INTER_INDICADOR_5 === "X" ? true : false;
        indicador_6.value = dataObj.value?.INTER_INDICADOR_6 === "X" ? true : false;
        indicador_7.value = dataObj.value?.INTER_INDICADOR_7 === "X" ? true : false;
        indicador_8.value = dataObj.value?.INTER_INDICADOR_8 === "X" ? true : false;
        indicador_9.value = dataObj.value?.INTER_INDICADOR_9 === "X" ? true : false;
        evidencia.value = dataObj.value?.INTER_EVIDENCIA;

        if (!isLoadingId && dataObj) {

        }
    }
    catch (error) {
        console.log(error);
    }
});

const query = useInsertInternacionalizacion()
const queryUpdate = useUpdateInternacionalizacion(idItem)

//Datos Generales
const sede = ref<number>(0);
const codigo_carrera = ref<number>(0);
const convenio_codigo = ref<string>();
const convenio_nombre = ref<string>();
const contraparte = ref<string>();
const pais = ref<number>(0);
const participante = ref<number>(0);
const apellido_participante = ref<string>();
const nombre_participante = ref<string>();
const actividades = ref<string>();
const fecha_inicio = ref<string>();
const fecha_fin = ref<string>();
const area = ref<number>(0);
const financiamiento = ref<number>(0);
//Aporte
const a_docencia = ref<string>();
const a_investigacion = ref<string>();
const a_vinculacion = ref<string>();
const a_administrativo = ref<string>();
const a_internacionalizacion = ref<string>();
//Indicadores
const indicador_1 = ref<string>();
const indicador_2 = ref<string>();
const indicador_3 = ref<string>();
const indicador_4 = ref<string>();
const indicador_5 = ref<string>();
const indicador_6 = ref<string>();
const indicador_7 = ref<string>();
const indicador_8 = ref<string>();
const indicador_9 = ref<string>();
const evidencia = ref<string>();

const submit = async () => {
    if (route.params.id) {
        // Actualizar
        try {
            if (sede.value === 0) {
                alert("Seleccione una Sede");
                return;
            }
            if (codigo_carrera.value === 0) {
                alert("Seleccione un Código de Carrera");
                return;
            }
            if (pais.value === 0) {
                alert("Seleccione un País");
                return;
            }
            if (participante.value === 0) {
                alert("Seleccione un Tipo de Participante");
                return;
            }
            if (area.value === 0) {
                alert("Seleccione un Área de Conocimiento");
                return;
            }
            if (financiamiento.value === 0) {
                alert("Seleccione el Financiamiento");
                return;
            }
            const Actualizacion = await queryUpdate.mutateAsync(
                {
                    SED_ID: sede.value,
                    ICAR_ID: codigo_carrera.value ?? 0,
                    INTER_CONV_CODIGO: convenio_codigo.value ?? "",
                    INTER_CONV_NOMBRE: convenio_nombre.value ?? "",
                    INTER_CONTRAPARTE: contraparte.value ?? "",
                    PAI_ID: pais.value ?? 0,
                    PTIP_ID: participante.value ?? 0,
                    INTER_PAPELLIDO: apellido_participante.value ?? "",
                    INTER_PNOMBRE: nombre_participante.value ?? "",
                    INTER_ACTIVIDADES: actividades.value ?? "",
                    INTER_FINICIO: fecha_inicio.value ?? "",
                    INTER_FFIN: fecha_fin.value ?? "",
                    ARE_ID: area.value ?? 0,
                    FIN_ID: financiamiento.value ?? 0,
                    INTER_ADOCENCIA: a_docencia.value ? 'X' : '',
                    INTER_AINVESTIGACION: a_investigacion.value ? 'X' : '',
                    INTER_AVINCULACION: a_vinculacion.value ? 'X' : '',
                    INTER_AADMINISTRATIVO: a_administrativo.value ? 'X' : '',
                    INTER_AINTERNACIONALIZACION: a_internacionalizacion.value ? 'X' : '',
                    INTER_INDICADOR_1: indicador_1.value ? 'X' : '',
                    INTER_INDICADOR_2: indicador_2.value ? 'X' : '',
                    INTER_INDICADOR_3: indicador_3.value ? 'X' : '',
                    INTER_INDICADOR_4: indicador_4.value ? 'X' : '',
                    INTER_INDICADOR_5: indicador_5.value ? 'X' : '',
                    INTER_INDICADOR_6: indicador_6.value ? 'X' : '',
                    INTER_INDICADOR_7: indicador_7.value ? 'X' : '',
                    INTER_INDICADOR_8: indicador_8.value ? 'X' : '',
                    INTER_INDICADOR_9: indicador_9.value ? 'X' : '',
                    INTER_EVIDENCIA: evidencia.value ?? "",
                    INTER_ESTADO: 1
                }
            )

            if (Actualizacion.affected === 1) {
                alert('Datos actualizados correctamente');
                router.push('/')
            }
            else {
                alert('Error al actualizar los datos')
            }
        } catch (error) {
            alert('Error al actualizar los datos - catch')
            console.log(error)
        }
    }
    else
    {
        // Insertar
        try {
            if (sede.value === 0) {
                alert("Seleccione una Sede");
                return;
            }
            if (codigo_carrera.value === 0) {
                alert("Seleccione un Código de Carrera");
                return;
            }
            if (pais.value === 0) {
                alert("Seleccione un País");
                return;
            }
            if (participante.value === 0) {
                alert("Seleccione un Tipo de Participante");
                return;
            }
            if (area.value === 0) {
                alert("Seleccione un Área de Conocimiento");
                return;
            }
            if (financiamiento.value === 0) {
                alert("Seleccione el Financiamiento");
                return;
            }
            const Insercion = await query.mutateAsync(
                {
                    SED_ID: sede.value,
                    ICAR_ID: codigo_carrera.value ?? 0,
                    INTER_CONV_CODIGO: convenio_codigo.value ?? "",
                    INTER_CONV_NOMBRE: convenio_nombre.value ?? "",
                    INTER_CONTRAPARTE: contraparte.value ?? "",
                    PAI_ID: pais.value ?? 0,
                    PTIP_ID: participante.value ?? 0,
                    INTER_PAPELLIDO: apellido_participante.value ?? "",
                    INTER_PNOMBRE: nombre_participante.value ?? "",
                    INTER_ACTIVIDADES: actividades.value ?? "",
                    INTER_FINICIO: fecha_inicio.value ?? "",
                    INTER_FFIN: fecha_fin.value ?? "",
                    ARE_ID: area.value ?? 0,
                    FIN_ID: financiamiento.value ?? 0,
                    INTER_ADOCENCIA: a_docencia.value ? 'X' : '',
                    INTER_AINVESTIGACION: a_investigacion.value ? 'X' : '',
                    INTER_AVINCULACION: a_vinculacion.value ? 'X' : '',
                    INTER_AADMINISTRATIVO: a_administrativo.value ? 'X' : '',
                    INTER_AINTERNACIONALIZACION: a_internacionalizacion.value ? 'X' : '',
                    INTER_INDICADOR_1: indicador_1.value ? 'X' : '',
                    INTER_INDICADOR_2: indicador_2.value ? 'X' : '',
                    INTER_INDICADOR_3: indicador_3.value ? 'X' : '',
                    INTER_INDICADOR_4: indicador_4.value ? 'X' : '',
                    INTER_INDICADOR_5: indicador_5.value ? 'X' : '',
                    INTER_INDICADOR_6: indicador_6.value ? 'X' : '',
                    INTER_INDICADOR_7: indicador_7.value ? 'X' : '',
                    INTER_INDICADOR_8: indicador_8.value ? 'X' : '',
                    INTER_INDICADOR_9: indicador_9.value ? 'X' : '',
                    INTER_EVIDENCIA: evidencia.value ?? "",
                    INTER_ESTADO: 1
                }
            )

            if (Insercion.affectedRows === 1) {
                alert('Datos guardados correctamente');
                router.push('/')
                // router.push({ name: 'matriz' }); // Redirigir a la ruta "matriz"
                // window.location.reload(); // Recargar la página
            }
            else {
                alert('Error al guardar los datos')
            }
        } catch (error) {
            alert('Error al guardar los datos - catch')
            console.log(error)
        }
    }
}

</script>

<style scoped>
@import '../css/bootstrap-cerulean.min.css';
@import '../css/charisma-app.css';
@import '../css/estilos.css';
@import '../css/jquery.iphone.toggle.css';
@import '../css/choosen/chosen.min.css';
@import '../css/colorbox/example3/colorbox.css';
@import '../css/tableEstilos.css';

.seleccion-invalida {
    border-color: red;
    /* Cambia el borde a rojo */
    box-shadow: 0 0 5px red;
    /* Agrega una sombra roja */
    width: 100%;
}

.select-valida {
    border-color: green;
    /* Cambia el borde a verde */
    box-shadow: 0 0 5px green;
    /* Agrega una sombra verde */
}
</style>