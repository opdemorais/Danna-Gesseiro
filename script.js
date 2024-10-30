function contatoWhatsApp(message) {
    const phoneNumber = '5575999571968'; // Substitua pelo número do Daniel Danna
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}
