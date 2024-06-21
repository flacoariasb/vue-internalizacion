<template>
    <div v-if="isPending" class="flex items-center justify-center min-h-screen bg-gray-100">
        <div role="status" class="flex items-center justify-center">
            <svg aria-hidden="true" class="w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08199 50.5908C9.08199 73.3884 27.2023 91.5088 50 91.5088C72.7977 91.5088 90.918 73.3884 90.918 50.5908C90.918 27.7932 72.7977 9.67288 50 9.67288C27.2023 9.67288 9.08199 27.7932 9.08199 50.5908Z"
                    fill="currentColor" />
                <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5531C95.2932 28.8228 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7235 75.2124 7.41289C69.5422 4.10227 63.2754 1.94025 56.7082 1.05117C51.7666 0.367499 46.7353 0.446843 41.8303 1.27873C39.3616 1.69328 37.9242 4.19778 38.5605 6.62326C39.1968 9.04874 41.673 10.4711 44.143 10.1075C47.852 9.53988 51.6361 9.61436 55.2878 10.3178C60.8788 11.3881 66.1387 13.634 70.6331 16.9043C75.1275 20.1747 78.7314 24.3748 81.188 29.192C83.0332 32.6002 84.4328 36.2577 85.3465 40.0429C85.9302 42.3678 88.4543 43.6781 90.88 43.0409Z"
                    fill="currentFill" />
            </svg>
            <span class="sr-only">Loading...</span>
        </div>
    </div>
    <div v-else>
        <!-- Input de busqueda -->
        <div class="absolute right-0">
            <form class="py-2 px-2">
                <label class="sr-only">Búsqueda</label>
                <div class="relative w-full">
                    <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="text" @input="search" placeholder="Buscar . . ."
                        class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>
            </form>
        </div>

        <div>
            <!-- Dropdown button -->
            <div class="relative inline-block text-left">
                <button style="display: flex; justify-content: center; " class="btn btn-primary" @click="toggleList">
                    <p>Columnas de la tabla</p><svg class="w-2.5 h-2.5 ms-3" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 4 4 4-4" />
                    </svg>
                </button>
                <ul v-show="showList" ref="dropdownList" class="dropdown-list">
                    <!-- <li v-for="(item, index) in items" :key="index">{{ item }}</li> -->
                    <li v-for="(header, index) in columns" :key="index"
                        class="flex justify-between hover:bg-gray-100 hover:cursor-pointer dark:hover:bg-gray-600 dark:hover:text-white"
                        @click="onChangeVisibilityColumn(index)">
                        <span class="block px-4 py-2 ">{{
                            header.tittle }}</span>
                        <span :class="[
                            `${header.isShowing ? 'text-green-500' : 'text-red-500'}`,
                            `block px-4 py-2`,
                            `hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`
                        ]">{{ header.isShowing ? 'Visible' : 'Oculto' }}</span>
                    </li>
                </ul>
            </div>
            
            <div class="flex">
                <p class="relative inline-block text-left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <button class="btn" style="display: flex; width: 60px; justify-content: center; border: 1px solid #ccc;" @click="toggleList2">
                    <span></span>{{ lblFilas }}<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 4 4 4-4" />
                    </svg>
                </button><p>&nbsp;entradas</p>
                <!-- <div class="relative" style="margin-left: 0%;"> -->
                    <ul v-show="showList2" ref="dropdownList2" class="left-20 top-10 dropdown-list2" >
                        <li v-for="(item, index) in optionsRowsPerPage" :key="index">
                            <span class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                @click="onChangeRowsPerPage(item)">{{ item }}</span>
                        </li>
                    </ul>
                <!-- </div> -->
            </div>


        </div>

        <div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th v-for="(head, headIndex) in columns" :key="headIndex" scope="col"
                                :class="`${columns[headIndex].isShowing ? 'px-6 py-3' : ''}`">
                                <div v-show="head.isShowing">
                                    {{ head.tittle }}
                                </div>
                            </th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(row, rowIndex) in filteredItems" :key="rowIndex"
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th v-for="(cell, cellIndex) in Object.values(row ? row : [])" :key="cellIndex" scope="row"
                                :class="[
                                    ` font-medium text-gray-900 whitespace-nowrap dark:text-white`,
                                    `${columns[cellIndex].isShowing ? 'px-6 py-4' : ''}`
                                ]">
                                <div v-show="columns[cellIndex].isShowing">
                                    {{ cell }}
                                </div>
                            </th>
                            <th><button @click="handleRowClick(+row.INTER_ID)" type="button"
                                    class="btn btn-primary">Editar</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div>
            <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between p-4"
                aria-label="Table navigation">
                <span
                    class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Mostrando
                    <span class="font-semibold text-gray-900 dark:text-white">{{ showingNumberStartRowsCurrentPage
                        }}-{{ showingNumberEndRowsCurrentPage }}</span>
                    de
                    <span class="font-semibold text-gray-900 dark:text-white">{{ totalRows }}</span>

                </span>
                <div class="flex flex-col">
                    <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                        <li>
                            <span
                                class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                @click="onChangeCurrentPage(1)">Inicio</span>
                        </li>
                        <li>
                            <span
                                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500  border border-gray-300 hover:cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                @click="onBeforeCurrentPage">Anterior</span>
                        </li>
                        <li v-for="item in totalPages" :key="item">
                            <span :class="[
                                `flex items-center justify-center px-3 h-8 leading-tight text-gray-500  border border-gray-300 hover:cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`,
                                `${currentPage == item ? 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-white' : 'bg-white'}`
                            ]" @click="onChangeCurrentPage(item)">{{
                                item }}</span>
                        </li>
                        <li>
                            <span class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500  border border-gray-300 hover:cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
                            " @click="onNextCurrentPage">Siguiente</span>
                        </li>
                        <li>
                            <span
                                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                @click="onChangeCurrentPage(totalPages)">Fin</span>
                        </li>
                    </ul>
                    <span class="font-normal text-gray-900 dark:text-white justify-end">Páginas en total: {{ totalPages
                        }}</span>
                </div>
            </nav>
        </div>
        <div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'

// import type { MatrizResponseInterface } from '../interfaces/matriz.interface'
import type { Internalizacion } from '../interfaces/internacionalizacion'
import { initDropdowns } from 'flowbite';

const showList = ref(false);
const showList2 = ref(false);
const lblFilas = ref(5);

const toggleList = () => {
    showList.value = !showList.value;
};

const toggleList2 = () => {
    showList2.value = !showList2.value;
};

const dropdownList = ref<HTMLElement | null>(null);
const dropdownList2 = ref<HTMLElement | null>(null);
const button = ref<HTMLElement | null>(null);
const button2 = ref<HTMLElement | null>(null);

const { data, isPending } = useQuery({
    queryKey: ['matriz'],
    queryFn: async () => {
        const response = await axios.get<Internalizacion[]>(
            'http://192.168.0.47:3000/internacionalizacion',
            {
                headers: {
                    apikey: "documental",
                    apisecret: "Documental2021file"
                }
            }
        )
        return response.data
    }
})

const searchFilter = ref<string>('');

const filteredItems = computed(() => {
    const rowsToShow = data.value ? data.value : [];
    let items = rowsToShow;

    return items.filter((item, index) => {
        const withinRange = index >= (currentPage.value - 1) * rowsPerPage.value &&
            index < currentPage.value * rowsPerPage.value;

        const matchesSearch = Object.values(item).some(value => {
            return value.toString().toLowerCase().includes(searchFilter.value.toLowerCase());
        });

        return matchesSearch && withinRange;
    });
});


const search = (e: any) => {
    searchFilter.value = e.target.value;
};

const columns = ref<{ head: string; isShowing: boolean, tittle: string }[]>([])

watch(data, () => {
    if (data.value) {
        // columns.value = Object.keys(data.value[0]).map((col) => {
        //     return { head: col, isShowing: true, tittle: col. }
        // })


        columns.value = [
            { head: data.value[0].INTER_ID, isShowing: true, tittle: 'No.' },
            { head: data.value[0].SED_ID, isShowing: true, tittle: 'Sede' },
            { head: data.value[0].ICAR_ID, isShowing: false, tittle: 'Código de carrera' },
            { head: data.value[0].INTER_CONV_CODIGO, isShowing: false, tittle: 'Código de convenio Internacional' },
            { head: data.value[0].INTER_CONV_NOMBRE, isShowing: true, tittle: 'Nombre del convenio / convocatoria / evento internacional' },
            { head: data.value[0].INTER_CONTRAPARTE, isShowing: false, tittle: 'Contraparte Internacional' },
            { head: data.value[0].PAI_ID, isShowing: false, tittle: 'País' },
            { head: data.value[0].PTIP_ID, isShowing: false, tittle: 'Tipo del movilizado participante / ejecutor' },
            { head: data.value[0].INTER_PAPELLIDO, isShowing: true, tittle: 'Apellido(s) del movilizado / participante / ejecutor' },
            { head: data.value[0].INTER_PNOMBRE, isShowing: true, tittle: 'Nombre(s) del movilizado / participante / ejecutor' },
            { head: data.value[0].INTER_ACTIVIDADES, isShowing: false, tittle: 'Actividades' },
            { head: data.value[0].INTER_FINICIO, isShowing: true, tittle: 'Fecha de Inicio' },
            { head: data.value[0].INTER_FFIN, isShowing: true, tittle: 'Fecha de Finalización' },
            { head: data.value[0].ARE_ID, isShowing: false, tittle: 'Área de Conocimiento' },
            { head: data.value[0].FIN_ID, isShowing: false, tittle: 'Financiamiento' },
            { head: data.value[0].INTER_ADOCENCIA, isShowing: false, tittle: 'Aporte a función syustantiva. Docencia' },
            { head: data.value[0].INTER_AINVESTIGACION, isShowing: false, tittle: 'Aporte a función syustantiva. Investigación' },
            { head: data.value[0].INTER_AVINCULACION, isShowing: false, tittle: 'Aporte a función syustantiva. Vinculación' },
            { head: data.value[0].INTER_AADMINISTRATIVO, isShowing: false, tittle: 'Aporte a función syustantiva. Desarrollo Docente / Administrativo' },
            { head: data.value[0].INTER_AINTERNACIONALIZACION, isShowing: false, tittle: 'Aporte a función syustantiva. Internacionalización' },
            { head: data.value[0].INTER_INDICADOR_1, isShowing: false, tittle: 'Indicador. Opción 1 Mov. Est. Entr.' },
            { head: data.value[0].INTER_INDICADOR_2, isShowing: false, tittle: 'Indicador. Opción 2 Mov. Est. Salien.' },
            { head: data.value[0].INTER_INDICADOR_3, isShowing: false, tittle: 'Indicador. Opción 3 Mov. Doc. Entr.' },
            { head: data.value[0].INTER_INDICADOR_4, isShowing: false, tittle: 'Indicador. Opción 4 Mov. Doc. Salie.' },
            { head: data.value[0].INTER_INDICADOR_5, isShowing: false, tittle: 'Indicador. Opción 5 Mov. Adm. Salie.' },
            { head: data.value[0].INTER_INDICADOR_6, isShowing: false, tittle: 'Indicador. Opción 6 Convenio Efect.' },
            { head: data.value[0].INTER_INDICADOR_7, isShowing: false, tittle: 'Indicador. Opción 7 Prod. Cientific.' },
            { head: data.value[0].INTER_INDICADOR_8, isShowing: false, tittle: 'Indicador. Opción 8 Inter. Currículo (COIL, IDV, Telecolaboación)' },
            { head: data.value[0].INTER_INDICADOR_9, isShowing: false, tittle: 'Indicador. Opción 9 Inter. en casa (Interculturalidad en el campus)' },
            { head: data.value[0].INTER_EVIDENCIA, isShowing: false, tittle: 'Evidencia' },
            { head: data.value[0].INTER_ESTADO, isShowing: false, tittle: 'Estado' }
        ]
    }
})

onMounted(() => {
    // initDropdowns()
    document.addEventListener('click', closeDropdown);
    document.addEventListener('click', closeDropdown2);
    if (data.value) {
        columns.value = Object.keys(data.value[0]).map((col) => {
            return { head: col, isShowing: true, tittle: col }
        })
    }
});

const closeDropdown = (event: MouseEvent) => {
    const dropdown = dropdownList.value;
    const buttonElem = button.value;

    if (!dropdown || !buttonElem) return;

    if (!dropdown.contains(event.target as Node) && event.target !== buttonElem) {
        showList.value = false;
    }
};

const closeDropdown2 = (event: MouseEvent) => {
    const dropdown2 = dropdownList2.value;
    const buttonElem2 = button2.value;

    if (!dropdown2 || !buttonElem2) return;

    if (!dropdown2.contains(event.target as Node) && event.target !== buttonElem2) {
        showList2.value = false;
    }
};

// Limpiar el event listener al desmontar el componente
onUnmounted(() => {
    document.removeEventListener('click', closeDropdown);
    document.removeEventListener('click', closeDropdown2);
});

const onChangeVisibilityColumn = (index: number) => {
    columns.value[index].isShowing = !columns.value[index].isShowing
}

const onChangeCurrentPage = (page: number) => {
    currentPage.value = page
}
const onBeforeCurrentPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--
    }
}
const onNextCurrentPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++
    }
}

const optionsRowsPerPage = [5, 10, 15, 20, 25, 30, 50]
const rowsPerPage = ref<number>(optionsRowsPerPage[0])
const onChangeRowsPerPage = (rows: number) => {
    rowsPerPage.value = rows
    showList2.value = false;
    lblFilas.value = rows;
}
const currentPage = ref<number>(1)
const totalPages = computed(() => {
    return Math.ceil(data.value ? data.value.length / rowsPerPage.value : 0)
})
const totalRows = computed(() => {
    return data.value ? data.value.length : 0
})
const showingNumberStartRowsCurrentPage = computed(() => {

    return data.value ? ((rowsPerPage.value * (currentPage.value - 1)) + 1) : 0
})
const showingNumberEndRowsCurrentPage = computed(() => {
    if (rowsPerPage.value * currentPage.value > totalRows.value) {
        return totalRows.value
    }
    return data.value ? (rowsPerPage.value * currentPage.value) : 0
})


let selectedIndex = ref<number | null>(null);

const handleRowClick = (index: number) => {
    selectedIndex.value = index;
    console.log('Índice seleccionado:', selectedIndex.value);
};


</script>

<style scoped>
@import '../css/tableEstilos.css';
</style>