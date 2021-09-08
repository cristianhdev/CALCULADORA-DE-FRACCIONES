


const scriptsInEvents = {

		async HojaDeEventoCalculadoraFracciones_Event2_Act24(runtime, localVars)
		{
			let CajasInit = [
			    runtime.objects.Caja1.getFirstInstance(),
			    runtime.objects.Caja2.getFirstInstance(),
			    runtime.objects.Caja3.getFirstInstance(),
			    runtime.objects.Caja4.getFirstInstance(),
			    runtime.objects.Caja5.getFirstInstance(),
			    runtime.objects.Caja6.getFirstInstance(),
			    runtime.objects.Caja7.getFirstInstance(),
			    runtime.objects.Caja8.getFirstInstance(),
			    runtime.objects.Caja9.getFirstInstance(),
			    runtime.objects.Caja10.getFirstInstance(),
			    runtime.objects.Caja11.getFirstInstance()
			]
			
			let j = 0;
			
			    while (j <= 10) {
			
			        CajasInit[j].text = String(j / 10);
			
			        j++;
			    }
		},

		async HojaDeEventoCalculadoraFracciones_Event43_Act1(runtime, localVars)
		{
			let resultado = runtime.globalVars.resultadoDivision2;
			let cleanresultado = resultado.replace("=", '', 2).replace('""', '')
			let flecha = runtime.objects.SFlecha.getFirstInstance()
			
			let Cajas = [
			    runtime.objects.Caja1.getFirstInstance(),
			    runtime.objects.Caja2.getFirstInstance(),
			    runtime.objects.Caja3.getFirstInstance(),
			    runtime.objects.Caja4.getFirstInstance(),
			    runtime.objects.Caja5.getFirstInstance(),
			    runtime.objects.Caja6.getFirstInstance(),
			    runtime.objects.Caja7.getFirstInstance(),
			    runtime.objects.Caja8.getFirstInstance(),
			    runtime.objects.Caja9.getFirstInstance(),
			    runtime.objects.Caja10.getFirstInstance(),
			    runtime.objects.Caja11.getFirstInstance()
			]
			
			
			
			
			if (cleanresultado <= 1) {
			
			    let i = 0;
			
			    while (i <= 10) {
			
			        Cajas[i].text = String(i / 10);
			
			        i++;
			    }
			    let nuevaX = 435 + 33.4 * (cleanresultado * 10);
			    flecha.x = nuevaX
			
			} else if (cleanresultado <= 10) {
			    let i = 0;
			    while (i <= 10) {
			        Cajas[i].text = String(i);
			
			        i++;
			    }
			    let nuevaX = 435 + 33.4 * cleanresultado
			    flecha.x = nuevaX
			}
			else if (cleanresultado <= 100) {
			    let i = 0;
			    while (i <= 10) {
			        Cajas[i].text = String(i * 10);
			        i++;
			    }
			    let nuevaX = 435 + 33.4 * (cleanresultado / 10)
			    flecha.x = nuevaX
			}
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

