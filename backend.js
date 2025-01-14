function generatePassword(length = 12) {
	const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';
    const symbols = '!@#$%^&*()_-+=<>?';
	const allCharacters = lowercase + uppercase + digits + symbols;
	let password = '';
	for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters.charAt(randomIndex);
    }
	return password;
}
const password = generatePassword(16);
console.log(password);
