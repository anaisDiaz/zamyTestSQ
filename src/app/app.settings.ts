export class AppSettings {
    public static emailDomain = '@gmail.com';
    public static adminSuffix = '.zamy.admin';
    public static imageFileExtension = '.jpg';
    public static mainURL = 'http://localhost:4200';
    public static passphrase = 'z4mYc1u8';
    public static welcomeMailSubject = 'Bienvenido(a) a Zamy Club!!!';
    public static welcomeMailBody = '<img src="https://firebasestorage.googleapis.com' +
        '/v0/b/zamy-d9d98.appspot.com/o/zamy-web%2FlogoZamy2.jpg?alt=media&token=b4a19afa-' +
        '022b-4359-8e9a-862cae709727" alt="Avatar" style="width:15%">' +
        '<p> Hola {{firstName}} !! </p><p> Te damos la bienvenida a zamy.</p>' +
        '<p> Accede al siguiente link: {{mainURL}} </p> <p>Gracias!'.replace('{{mainURL}} </p>', AppSettings.mainURL);
    public static rejectionMailSubject = 'Solicitud no aprobada - Zamy Club';
    public static rejectionMailBody = '<img src="https://firebasestorage.googleapis.com' +
        '/v0/b/zamy-d9d98.appspot.com/o/zamy-web%2FlogoZamy2.jpg?alt=media&token=b4a19afa-' +
        '022b-4359-8e9a-862cae709727" alt="Avatar" style="width:15%">' +
        '<p> Hola {{firstName}}, lo sentimos.</p><p>Tu solicitud fue denegada por la siguiente razon: </p>';
}
