const getAdmins = (map) => {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}

	return admins;
};

const cargos = new Map();

cargos.set('Stephany', 'USER');
cargos.set('Luiz', 'ADMIN');
cargos.set('Elvira', 'ADMIN');
cargos.set('Carolina', 'USER');
cargos.set('Guilherme', 'USER');

console.log(getAdmins(cargos));



