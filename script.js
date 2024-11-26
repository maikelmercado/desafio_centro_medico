
let radiologia = [
    {
        hora: "12:00",
        especialista: "JOSE SOTO",
        rut: 13764873-1,
        paciente: "JAVIER SANTOS",
        prevision: "ISAPRE",
    },
    {
        hora: "09:30",
        especialista: "PEDRO GONZALEZ",  
        rut: 10864325-3,
        paciente: "CONSTANZA MESA",
        prevision: "FONASA",
    },
    {
        hora: "12:00",  
        especialista: "RAUL PEREZ",
        rut: 18654723-5,
        paciente: "ISABEL DONOSO",
        prevision: "ISAPRE",    
    },
    {   
        hora: "15:30",
        especialista: "PEDRO GONZALEZ",
        rut: 18965234-9,
        paciente: "JAVIER SANTOS",
        prevision: "FONASA",
    },
    {
        hora: "12:00",
        especialista: "RAUL PEREZ",
        rut: 1865372-3,
        paciente: "PEDRO SILVA",
        prevision: "ISAPRE",
    },
]



let traumatologia = [
    {
        hora: "09:30",
        especialista: "RAUL PEREZ",
        rut: 1121774-3,
        paciente: "JAVIER SANTOS",
        prevision: "FONASA",
    },
    {
        hora: "12:00",
        especialista: "JOSE SOTO",
        rut: 1144133-5,
        paciente: "OSVALDO MOLINA",
        prevision: "FONASA",
    },
    {
        hora: "09:30",
        especialista: "PEDRO GONZALEZ",
        rut: 12543762-5,
        paciente: "OMAR MENDOZA",  
        prevision: "ISAPRE",
    },
    {
        hora: "12:00",
        especialista: "RAUL PEREZ",
        rut: 24651782-3,
        paciente: "JAVIER SANTOS",
        prevision: "FONASA",
    },
    {
        hora: "11:30",
        especialista: "PEDRO GONZALEZ",
        rut: 18654233-4,
        paciente: "JUAN ALVAREZ",
        prevision: "FONASA",
    },
    {
        hora: "12:00",
        especialista: "JOSE SOTO",
        rut: 16986423-4,
        paciente: "ISA QUEZADA",
        prevision: "ISAPRE",
    },
    {
        hora: "09:30",
        especialista: "RAUL PEREZ",
        rut: 8765432-1,
        paciente: "JAVIER SANTOS",
        prevision: "FONASA",
    },
]



let dental = [
    {
        hora: "12:00",
        especialista: "RAUL PEREZ",
        rut: 6543287-1,
        paciente: "JAVIER SANTOS",
        prevision: "ISAPRE",
    },
    {
        hora: "09:30",
        especialista: "JOSE SOTO",  
        rut: 8765234-9,
        paciente: "ANGELICA CAPO",    
        prevision: "ISAPRE",
    },
    {
        hora: "12:00",
        especialista: "PEDRO GONZALEZ",
        rut: 8234654-1,
        paciente: "JAVIER SANTOS",
        prevision: "FONASA",
    },
    {
        hora: "09:30",
        especialista: "RAUL PEREZ",
        rut: 129875234-2,
        paciente: "MALENY MARAMBIO",
        prevision: "FONASA",
    },
    {
        hora: "12:00",
        especialista: "PEDRO GONZALEZ",
        rut: 13936723-5,
        paciente: "JAVIER SANTOS",
        prevision: "FONASA",
    },
    {
        hora: "09:30",
        especialista: "RAUL PEREZ",
        rut: "14441281-0",
        paciente: "CRISTIAN TALLINI",
        prevision: "ISAPRE",
    },
]
        document.write('<h1>Estadisticas Centro Medico Ñuñoa (Primeras y Ultimas atenciones)</h1>');

        document.write("<h2>Radiologia</h2>");
        document.write(`Primera Atención: 
            ${radiologia[0].paciente} - 
            ${radiologia[0].prevision} 
            |Última Atención: 
            ${radiologia[radiologia.length - 1].paciente} - 
            ${radiologia[radiologia.length - 1].prevision}`
            );

        document.write("<h2>Traumatologia</h2>");
        document.write(`Primera Atención: 
            ${traumatologia[0].paciente} -
            ${traumatologia[0].prevision} 
            |Última Atención: 
            ${traumatologia[traumatologia.length - 1].paciente} - 
            ${traumatologia[traumatologia.length - 1].prevision}`
            );

        document.write("<h2>Dental</h2>");
        document.write(`Primera Atención: 
            ${dental[0].paciente} - 
            ${dental[0].prevision} 
            |Última Atención: 
            ${dental[dental.length - 1].paciente} - 
            ${dental[dental.length - 1].prevision}`);


function TablaRadio(){
    let texto = "<tr><th>Hora</th><th>Medico Especialista</th><th>Rut</th><th>Pacientente</th><th>Prevision</th></tr>";
    for (let i = 0; i < radiologia.length; i++) {
    texto += `<tr>
                <td>${radiologia[i].hora}</td>
                <td>${radiologia[i].especialista}</td>
                <td>${radiologia[i].rut}</td>
                <td>${radiologia[i].paciente}</td>
                <td>${radiologia[i].prevision}</td>
            </tr>`;
        }
    document.getElementById("tabla-radio").innerHTML = `</br> ${texto}`;
    
}    

function TablaTraumatologia(){
    let texto = "<tr><th>Hora</th><th>Medico Especialista</th><th>Rut</th><th>Pacientente</th><th>Prevision</th></tr>";
for (let j = 0; j < traumatologia.length; j++) {
    texto += `<tr>
                <td>${traumatologia[j].hora}</td>
                <td>${traumatologia[j].especialista}</td>
                <td>${traumatologia[j].rut}</td>
                <td>${traumatologia[j].paciente}</td>
                <td>${traumatologia[j].prevision}</td>
            </tr>`;
        }
    document.getElementById("tabla-traumatologia").innerHTML =`</br> ${texto}`;

}

function TablaDental(){
    let texto = "<tr><th>Hora</th><th>Medico Especialista</th><th>Rut</th><th>Pacientente</th><th>Prevision</th></tr>";
for (let k = 0; k < dental.length; k++) {
    texto += `<tr>
                <td>${dental[k].hora}</td>
                <td>${dental[k].especialista}</td>
                <td>${dental[k].rut}</td>
                <td>${dental[k].paciente}</td>
                <td>${dental[k].prevision}</td>
            </tr>`;
        }
    document.getElementById("tabla-dental").innerHTML = `</br> ${texto}`;

}

TablaTraumatologia();
TablaDental();
TablaRadio();