/**
 * Réservation d'appel — Cal.com
 *
 * Un seul endroit pour le lien. Si tu changes de slug, de durée ou de compte,
 * c'est ici et nulle part ailleurs.
 *
 * Format attendu : "username/slug-de-l-evenement" — SANS "cal.com/" devant.
 * Exemple : le lien public https://cal.com/besmara/appel-decouverte
 *           s'écrit ici     besmara/appel-decouverte
 */
export const CAL_LINK = "besmara/appel-decouverte";

/** Isole cette intégration des autres embeds Cal éventuels. */
export const CAL_NAMESPACE = "appel-decouverte";

/** Bleu accent BESMARA (hsl 199 89% 48%) — pour que le popup reste dans la charte. */
export const CAL_BRAND_COLOR = "#0EA2E7";
