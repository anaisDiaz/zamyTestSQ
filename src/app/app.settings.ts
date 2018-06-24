export class AppSettings {
    public static emailDomain = '@bcp.com.pe';
    public static adminSuffix = '.zamy.admin';
    public static imageFileExtension = '.jpg';
    public static mainURL = 'http://localhost:4200';
    public static welcomeMailSubject = 'Bienvenido(a) a Zamy Club!!!';
    public static welcomeMailBody = 'Hola {{firstName}} !! <br> Te damos la bienvenida a zamy.' +
    '<br> Accede al siguiente link: {{mainURL}} <br> Gracias!'.replace('{{mainURL}}', AppSettings.mainURL);
    public static rejectionMailSubject = 'Solicitud no aprobada - Zamy Club';
    public static rejectionMailBody = 'Hola {{firstName}}, lo sentimos. <br> Tu solicitud fue denegada por la siguiente razon: <br>';
}
