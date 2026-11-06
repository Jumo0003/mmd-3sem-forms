Opgave: Identificer fejlscenarier og formuler fejlbeskeder
Du skal ikke implementere validering endnu. I stedet skal du oprette en Markdown-fil med endelsen .md (som du kender fra fx README.md), hvor du dokumenterer:

Alle formularfelter for den aktuelle formular.
- input feltet for recipename (type=text)
- buttonene man kan trykke på så man uploader opskriftnavnet.

Relevante fejlscenarier for hvert felt, fx manglende input, for kort tekst eller forkert datatype etc.
- scenarie 1, opskriften bliver ikke uploadet grundet fejl api endpoint
- scenarie 2, der er ikke blevet skrevet noget i inputfeltet
- scenarie 3, dårlig internet forbindelse
- scenarie 4, opskrift med det samme navn findes allerede

Brugervenlige og informative fejlbeskeder til hvert fejlscenarie, som forklarer, hvad der er galt, og hvordan brugeren retter fejlen.
- scenarie 1, "opskriften blev ikke uploadet, da der er fejl i api kaldet"
- scenarie 2, "udfyld input feltet for at uploade en opskrift"
- scenarie 3, "internette røg så der gik fejl i uploaden, tjek din forbindelse og prøv igen"
- scenarie 4, "der findes allerede en opskrift med det navn, prøv et andet"