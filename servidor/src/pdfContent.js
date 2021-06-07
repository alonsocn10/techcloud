const artistactr = require("./controllers/artistactr")
const usuarioctr = require("./controllers/usuarioctr")

module.exports = {
    content: [
        
        { text: "Informe usuarios", style: "header"},
        " ",
        " ",
        {
			style: 'label',
			table: {
				headerRows: 1,
				// dontBreakRows: true,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Id', style: "header"}, {text: 'Nombre', style: "header"}, {text: 'Apellidos', style: "header"}, {text: 'Email', style: "header"}, {text: 'Nombre de usuario', style: "header"}, {text: 'Tipo de usuario', style: "header"}],
					[
						'6011ab39e6e1d53500a78f05',
						'Admin',
						'Admin',
                        'admin@gmail.com',
                        'admin',
                        '1',
                        
					],
                    [
						'6018143ac0e22d2eac2621a9',
						'Francisco',
						'Romero',
                        'fran@gmail.com',
                        'Xutten',
                        '2',
                        
					],
                    [
						'60181a382ccdc23608e72753',
						'Pablo',
						'Murgui',
                        'kemon@gmail.com',
                        'morgan',
                        '2',
                        
					],
                    [
						'601ae335f4010c0d20e7d308',
						'Pablo',
						'Perea',
                        'perea@gmail.com',
                        'perea',
                        '2',
                        
					],
                    [
						'60281240d7186140d47895fb',
						'Dani',
						'Ibañez',
                        'dani@gmail.com',
                        'dani',
                        '2',
                        
					],
                    [
						'60284212ddb7e223a09d1217',
						'Jairo',
						'Moruno',
                        'jairo@gmail.com',
                        'jairo',
                        '2',
                        
					],
                    [
						'6029008240083637b0ac3cdb',
						'Carles',
						'Admin',
                        'admin@gmail.com',
                        'admin',
                        '2',
                        
					],
                    [
						'6029008240083637b0ac3cdb',
						'Carles',
						'Hernandez',
                        'carles@gmail.com',
                        'carles',
                        '2',
                        
					],
                    [
						'60293470e644712ed0c0cebc',
						'Raul',
						'Ballester',
                        'rul@gmail.com',
                        'rul',
                        '2',
                        
					],
                    [
						'6029768c246a680bb8a16ba0',
						'Juan',
						'Garcia',
                        'juan@gmail.com',
                        'juan',
                        '2',
                        
					],
                    [
						'602a53ff413f5d3650a698e8',
						'Carlos',
						'Latorre',
                        'carlos@gmail.com',
                        'carlos',
                        '2',
                        
					],
                    [
						'602aabd66603a420cc7b0d01',
						'Alvaro',
						'Pedros',
                        'alvaro@gmail.com',
                        'alvarop',
                        '2',
                        
					],
                    [
						'60bba1e9e33d8836686aec16',
						'Popi',
						'Rodilla',
                        'popi@gmail.com',
                        'popi',
                        '2',
                        
					],
                    [
						'60g1ab39a6e1d34112a97h05',
						'Presentacion',
						'Proyecto',
                        'presentacion@gmail.com',
                        'presentacion',
                        '2',
                        
					],
                   
				]
			}
		}    ]
}