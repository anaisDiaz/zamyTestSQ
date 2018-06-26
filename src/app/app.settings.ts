export class AppSettings {
    public static emailDomain = '@gmail.com';
    public static adminSuffix = '.zamy.admin';
    public static imageFileExtension = '.jpg';
    public static mainURL = 'http://localhost:4200';
    public static key = '1223298293233';
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
    public static privateKey = '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0B' +
    'AQEFAASCBKYwggSiAgEAAoIBAQC8B45P43+8DY3t\n/j40puiUsQW6vF/bLB1e28KA83C' +
    'XrW9XiPOLamS+zksEdRZzBdjP4lrIYOJyAtq7\nZubCACwuGNtKw1YGEOVhbjnjzWWR' +
    'yAhub5goqyo58VqTRHR9xhL8QPmLbZEYa1Mc\netUM/7cKrHZNpNzrofcw/WSC5Auk7Pk' +
    'hG4KHM1c/aZWDHYaVwpuxefkjah4oS8JJ\n1ZV6ktQPSEiIc7Uv24T9WonTawQ1AH9s5Z' +
    'pnTL71bhmoDJ7/bRmIJc+RwnGFomwh\nQkiXhqMJM2Fa1QYO6IrhY159DgL39TXJ/Ku' +
    '2CBsA6UXrwn23RdsBosUbG8I3ti1J\n97zclBUVAgMBAAECggEADl9fe/DOV0AL/Mi' +
    'l1Z16gr8jSnpSs2ykVBdlPzkcfqOV\nsrG3uAzqZYFcT5tpm2Izh/Rr7wwk0wUv1gp' +
    'QEj00I1PoE0dqIG2TMwbbavPM0z9g\nkZx7G4S15hbyTvZ5FxIYamrHCGbYI+80O6' +
    'WR+nvjcG/tXRMAhgxr2jVMRQsMbs9C\neLMRNsZBw2EbUPIYj9S7e/NOXlcpT2+h3/' +
    '8tWonPBOZRnfWm4xuoUHB/I6pgk+VX\nwQnsXUrIBaGFpJAREw9VbtpJ+ZtkP/gfP' +
    'e6xu3s5xzQk5BNM9q4LgbqstP+JI/01\nxLbJNHuH0ySRZG7m4UAbnwD91s0j2EWR' +
    '4fveD9aZQwKBgQD9qYyN4oszlR/FGmyU\nSi8AwUuw+ub+8+lenlXg9+E4zlcfTe' +
    'uynvbedL4KZVgBZKYBMyqJb35UP2b4rJaU\np+1ws+j5Cvhi7uCFSdn8jF9/nO3OKR' +
     'flJkBGdGopLA4rolXJeEQri/SYbzPA17eD\nULsP284W2JS5Y+VavCDWitqVCwKBgQ' +
      'C9wynGvD4Fr7Y+lYnaNDUgGmB/7fjoCLhH\nBSf+n9BrJ7sk+Q4Ced54llEKUcMtAsvOX' +
       'GUdu5L31hEun1ZgCO7B78VRLcZb/cmU\n+Mfm8/rYLXHZzqp/4nKmmxwxA9JTsS5lWPl7' +
       'bHJkdfCrblOhZaYDLSiF5i+DZviM\nDgs6CnQSXwKBgBgk8Un4DEPmp9V9BGTBAuRRgcDgw' +
       'Of3k3j8HTSCo59ilIxYQF0K\nIHlgJ06aAtxvFhX7JstaH24pcsWst9CCg2k81qoNz0Krdh' +
       'd5xhPx0I03BLOg2bNo\nBqouHoS4usiQdRXuKp7yfV+dBhIO9lq7bnK9+0nVZ6KVzZjrWzzQ' +
       'jqmtAoGAGTs7\n8MrSzFrCtquXesX6UlxvfFMeB2wxZHARE1AYnEbaIV5kOHwP0qTZ/a9FblS' +
       'y2Kt8\nXmm0bvOtsS9KgtZtOKgy6kpV16F1DjPOEK1cKyZPvxA1p29qozB4nSPO8YXbj2o3\nM' +
       'ewHgcgUyhaPVCR54G4+tx8WLjigz66GW59MM60CgYAP4Jwt7df5cBNH/xeaw9/Q\nuhuT0nTvE' +
       'uWeC5bp3n7QeLyK9qgtvHvXWeiav1H9orqE3dhB8BFTobSO+1fXqEvZ\nMEdPN0dafG83wWA78N' +
       'CxKxtuPs5FGWfJb3erocswIW/6fuJbpjfYHMppexpyxg5j\nuaNYIgGnS4VhIX5Co76ZVQ==\n-' +
       '----END PRIVATE KEY-----\n';
}
