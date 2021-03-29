var IMG; 
//empty image URL
const emptyIMG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAMgCAYAAADbcAZoAAAgAElEQVR4Xu3XMQ0AAAzDsJU/6bHI5RGoZO3JzhEgQIAAAQIECBAgQCASWLRjhgABAgQIECBAgAABAidAPAEBAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQAH/z5sAABIaSURBVIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQIPAWJAMhH4HbWQAAAABJRU5ErkJggg==";

//Shape and Style options variables
var ChosenShape = document.querySelector('input[name="ShapeRadio"]:checked').value;
var DrawingStyle = document.querySelector('input[name="circle"]:checked').value;

//Elements that are constantly in use
var OptionsTable = document.getElementById("OptionsTable");
var Canvas = document.getElementById("Canvas");
var backImage = document.getElementById("img");

//"ctx"
var Graphics = Canvas.getContext("2d");
Graphics.fillStyle = "rgba(255, 255, 255, 0)";
Graphics.fillRect(0, 0, Canvas.width, Canvas.height);
Graphics.fillStyle = "rgba(0, 0, 0, 255)";

//color pickers and chosen colors
var colorPicker1 = document.getElementById("colorPicker1");
var colorPicker2 = document.getElementById("colorPicker2");
var label1 = document.getElementById("label1");
var label2 = document.getElementById("label2");
label1.style.backgroundColor = colorPicker1.value;
label2.style.backgroundColor = colorPicker2.value;

//stroke width input
var strokeWidth = document.getElementById("strokeWidth");
var strokeWidthLabel = document.getElementById("strokeWidthLabel");
strokeWidthLabel.innerHTML = strokeWidth.value;
Graphics.lineWidth = strokeWidth.value;



//x,y coordinates used every time the user wants to draw / do something on the canvas
var startX;
var startY;
var endX;
var endY;

//the way lines connect
Graphics.lineJoin = "miter";

//gets the current coordinates of the mouse in relation to the canvas
function getMousePosition(canvas, event, b) {
    var rect = canvas.getBoundingClientRect();
    if (b) {
        startX = event.clientX - rect.left;
        startY = event.clientY - rect.top;
    }
    else {
        endX = event.clientX - rect.left;
        endY = event.clientY - rect.top;
    }
}

//called when the user wants to draw a certain shape 
//draws the shape
function Draw(Shape) {
    switch (Shape) {
        case "eraser":
            Graphics.clearRect(endX - Graphics.lineWidth / 2, endY - Graphics.lineWidth / 2, Graphics.lineWidth, Graphics.lineWidth);
            break;
        case "brush":  
            var fillStyle = Graphics.fillStyle;
            Graphics.fillStyle = Graphics.strokeStyle;
            Graphics.beginPath();
            Graphics.arc(endX, endY, Graphics.lineWidth / 2, 0, 2 * Math.PI);
            Graphics.fill(); 
            Graphics.beginPath();
            Graphics.moveTo(startX, startY);
            Graphics.lineTo(endX, endY);
            Graphics.stroke();
            Graphics.fillStyle = fillStyle;
            getMousePosition(Canvas, event, true);
            break;
        case "strokeLine":
            var strokeStyle = Graphics.strokeStyle;
            Graphics.strokeStyle = Graphics.fillStyle;
            Graphics.beginPath();
            Graphics.moveTo(startX, startY);
            Graphics.lineTo(endX, endY);
            Graphics.stroke();
            Graphics.strokeStyle = strokeStyle;
            Graphics.beginPath();
            Graphics.arc(endX, endY, Graphics.lineWidth / 2, 0, 2 * Math.PI);
            Graphics.arc(startX, startY, Graphics.lineWidth / 2, 0, 2 * Math.PI);
            Graphics.fill();
            break;
        case "strokeRect":
            Graphics.strokeRect(startX, startY, endX - startX, endY - startY);
            break;
        case "fillRect":
            Graphics.fillRect(startX, startY, endX - startX, endY - startY);
            break;
        case "strokeCircle":
            Graphics.beginPath();
            if (DrawingStyle == 1)
                Graphics.arc(startX, startY, Math.abs(Math.abs((endX - startX) / 2) + Math.abs((endY - startY) / 2)), 0, 2 * Math.PI);
            else if (DrawingStyle == 2)
                Graphics.arc((startX + endX) / 2, (startY + endY) / 2, Math.abs(Math.abs((endX - startX) / 2) + Math.abs((endY - startY) / 2)) / 2, 0, 2 * Math.PI);
            else if (DrawingStyle == 3)
                Graphics.arc(startX, startY, Math.sqrt(Math.pow(Math.abs(endX - startX), 2) + Math.pow(Math.abs(endY - startY), 2)), 0, 2 * Math.PI);
            else
                Graphics.arc((startX + endX) / 2, (startY + endY) / 2, Math.sqrt(Math.pow(Math.abs(endX - startX), 2) + Math.pow(Math.abs(endY - startY), 2)) / 2, 0, 2 * Math.PI);
            Graphics.stroke();
            break;
        case "fillCircle":
            Graphics.beginPath();
            if(DrawingStyle == 1)
                Graphics.arc(startX, startY, Math.abs(Math.abs((endX - startX) / 2) + Math.abs((endY - startY) / 2)), 0, 2 * Math.PI);
            else if(DrawingStyle == 2)
                Graphics.arc((startX + endX) / 2, (startY + endY) / 2, Math.abs(Math.abs((endX - startX) / 2) + Math.abs((endY - startY) / 2)) / 2, 0, 2 * Math.PI);
            else if (DrawingStyle == 3)
                Graphics.arc(startX, startY, Math.sqrt(Math.pow(Math.abs(endX - startX), 2) + Math.pow(Math.abs(endY - startY),2)), 0, 2 * Math.PI);
            else
                Graphics.arc((startX + endX) / 2, (startY + endY) / 2, Math.sqrt(Math.pow(Math.abs(endX - startX), 2) + Math.pow(Math.abs(endY - startY), 2)) / 2, 0, 2 * Math.PI);
            Graphics.fill();
            break;
        case "strokeEllipse":
            Graphics.beginPath();
            if (DrawingStyle == 1)
                Graphics.ellipse(startX, startY, Math.abs(endX - startX) / 2, Math.abs(endY - startY) / 2, 0, 0, 2 * Math.PI);
            else if(DrawingStyle == 2)
                Graphics.ellipse((startX + endX) / 2, (startY + endY) / 2, Math.abs((endX - startX) / 2), Math.abs((endY - startY) / 2), 0, 0, 2 * Math.PI);
            else if (DrawingStyle == 3)
                Graphics.ellipse(startX, startY, Math.abs(endX - startX), Math.abs(endY - startY), 0, 0, 2 * Math.PI);
            else
                Graphics.ellipse((startX + endX) / 2, (startY + endY) / 2, Math.abs((endX - startX) / 2), Math.abs((endY - startY) / 2), 0, 0, 2 * Math.PI);
            Graphics.stroke();
            break;
        case "fillEllipse":
            Graphics.beginPath();
            if (DrawingStyle == 1)
                Graphics.ellipse(startX, startY, Math.abs(endX - startX) / 2, Math.abs(endY - startY) / 2, 0, 0, 2 * Math.PI);
            else if (DrawingStyle == 2)
                Graphics.ellipse((startX + endX) / 2, (startY + endY) / 2, Math.abs((endX - startX) / 2), Math.abs((endY - startY) / 2), 0, 0, 2 * Math.PI);
            else if (DrawingStyle == 3)
                Graphics.ellipse(startX, startY, Math.abs(endX - startX), Math.abs(endY - startY), 0, 0, 2 * Math.PI);
            else
                Graphics.ellipse((startX + endX) / 2, (startY + endY) / 2, Math.abs((endX - startX) / 2), Math.abs((endY - startY) / 2), 0, 0, 2 * Math.PI);
            Graphics.fill();
            break;
    }
}

//changes the stroke width value when the "range" input is changed
strokeWidth.addEventListener("input", function() {
    strokeWidthLabel.innerHTML = strokeWidth.value;
    Graphics.lineWidth = strokeWidth.value;
});

//changes the stroke style value ( = color) when user changes it through the color picker
colorPicker1.addEventListener("input", function () {
    Graphics.strokeStyle = colorPicker1.value;
    label1.style.backgroundColor = colorPicker1.value;
});

//changes the fill style value ( = color) when user changes it through the color picker
colorPicker2.addEventListener("input", function () {
    Graphics.fillStyle = colorPicker2.value;
    label2.style.backgroundColor = colorPicker2.value;
});

//activates when the user clicks on the canvas (mouse down)
//decides what to do based on the "ChosenShape" var
Canvas.addEventListener("mousedown", function (event) {
    IMG = Canvas.toDataURL();
    backImage.src = IMG;

    ChosenShape = document.querySelector('input[name="ShapeRadio"]:checked').value;
    DrawingStyle = document.querySelector('input[name="circle"]:checked').value;
    getMousePosition(Canvas, event, true);
    if (ChosenShape != "brush" && ChosenShape != "eraser" && ChosenShape != "colorPicker" && ChosenShape != "bucket") {
        Canvas.onmousemove = function (event) {
            Graphics.clearRect(0, 0, Canvas.width, Canvas.height)
            getMousePosition(Canvas, event, false);
            Draw(ChosenShape);
        }
    }
    else if (ChosenShape == "brush") {
        getMousePosition(Canvas, event, false);
        Draw(ChosenShape);
        Canvas.onmousemove = function (event) {
            getMousePosition(Canvas, event, false);
            Draw(ChosenShape);
        }
    }
    else if (ChosenShape == "eraser") {
        var image = document.createElement("img");
        image.src = IMG;
        image.onload = function () {
            Graphics.drawImage(image, 0, 0);
            getMousePosition(Canvas, event, false);
            Draw(ChosenShape);
            backImage.src = emptyIMG;
            Canvas.onmousemove = function (event) {
                getMousePosition(Canvas, event, false);
                Draw(ChosenShape);
            }
        }
    }
    else if (ChosenShape == "colorPicker") {
        getMousePosition(Canvas, event, true);
        var pixel = Graphics.getImageData(startX, startY, 1, 1).data;
        var color = "rgba(" + pixel[0] + "," + pixel[1] + "," + pixel[2] + "," + pixel[3] +")";
        Graphics.strokeStyle = color;
        Graphics.fillStyle = color;
        label1.style.backgroundColor = color;
        label2.style.backgroundColor = color;
    }
    else if (ChosenShape == "bucket") {
        console.clear();
        var image = document.createElement("img");
        image.src = IMG;
        image.onload = function () {
            Graphics.drawImage(image, 0, 0);
            backImage.src = emptyIMG;
            getMousePosition(Canvas, event, true);
            var imgData = Graphics.getImageData(0, 0, Canvas.width, Canvas.height);
            var pixel = Graphics.getImageData(startX, startY, 1, 1).data;
            try {
                //can paint 25 times more pixels due to stack size limit
                //but impacts the accuracy of the fill action
                PaintBucket(startX - 2, startY - 2, imgData, pixel[0], pixel[1], pixel[2], pixel[3], HexToRgb(Graphics.fillStyle));
                PaintBucket(startX - 1, startY - 2, imgData, pixel[0], pixel[1], pixel[2], pixel[3], HexToRgb(Graphics.fillStyle));
                PaintBucket(startX, startY - 2, imgData, pixel[0], pixel[1], pixel[2], pixel[3], HexToRgb(Graphics.fillStyle));
                PaintBucket(startX + 1, startY - 2, imgData, pixel[0], pixel[1], pixel[2], pixel[3], HexToRgb(Graphics.fillStyle));
                PaintBucket(startX + 2, startY - 2, imgData, pixel[0], pixel[1], pixel[2], pixel[3], HexToRgb(Graphics.fillStyle));

                PaintBucket(startX - 2, startY - 1, imgData, pixel[0], pixel[1], pixel[2], pixel[3], HexToRgb(Graphics.fillStyle));
                PaintBucket(startX - 1, startY - 1, imgData, pixel[0], pixel[1], pixel[2], pixel[3], HexToRgb(Graphics.fillStyle));
                PaintBucket(startX, startY - 1, imgData, pixel[0], pixel[1], pixel[2], pixel[3], HexToRgb(Graphics.fillStyle));
                PaintBucket(startX + 1, startY - 1, imgData, pixel[0], pixel[1], pixel[2], pixel[3], HexToRgb(Graphics.fillStyle));
                PaintBucket(startX + 2, startY - 1, imgData, pixel[0], pixel[1], pixel[2], pixel[3], HexToRgb(Graphics.fillStyle));

                PaintBucket(startX - 2, startY, imgData, pixel[0], pixel[1], pixel[2], pixel[3], HexToRgb(Graphics.fillStyle));
                PaintBucket(startX - 1, startY, imgData, pixel[0], pixel[1], pixel[2], pixel[3], HexToRgb(Graphics.fillStyle));
                PaintBucket(startX, startY, imgData, pixel[0], pixel[1], pixel[2], pixel[3], HexToRgb(Graphics.fillStyle));
                PaintBucket(startX + 1, startY, imgData, pixel[0], pixel[1], pixel[2], pixel[3], HexToRgb(Graphics.fillStyle));
                PaintBucket(startX + 2, startY, imgData, pixel[0], pixel[1], pixel[2], pixel[3], HexToRgb(Graphics.fillStyle));

                PaintBucket(startX - 2, startY + 1, imgData, pixel[0], pixel[1], pixel[2], pixel[3], HexToRgb(Graphics.fillStyle));
                PaintBucket(startX - 1, startY + 1, imgData, pixel[0], pixel[1], pixel[2], pixel[3], HexToRgb(Graphics.fillStyle));
                PaintBucket(startX, startY + 1, imgData, pixel[0], pixel[1], pixel[2], pixel[3], HexToRgb(Graphics.fillStyle));
                PaintBucket(startX + 1, startY + 1, imgData, pixel[0], pixel[1], pixel[2], pixel[3], HexToRgb(Graphics.fillStyle));
                PaintBucket(startX + 2, startY + 1, imgData, pixel[0], pixel[1], pixel[2], pixel[3], HexToRgb(Graphics.fillStyle));

                PaintBucket(startX - 2, startY + 2, imgData, pixel[0], pixel[1], pixel[2], pixel[3], HexToRgb(Graphics.fillStyle));
                PaintBucket(startX - 1, startY + 2, imgData, pixel[0], pixel[1], pixel[2], pixel[3], HexToRgb(Graphics.fillStyle));
                PaintBucket(startX, startY + 2, imgData, pixel[0], pixel[1], pixel[2], pixel[3], HexToRgb(Graphics.fillStyle));
                PaintBucket(startX + 1, startY + 2, imgData, pixel[0], pixel[1], pixel[2], pixel[3], HexToRgb(Graphics.fillStyle));
                PaintBucket(startX + 2, startY + 2, imgData, pixel[0], pixel[1], pixel[2], pixel[3], HexToRgb(Graphics.fillStyle));

                Graphics.putImageData(imgData, 0, 0);
            }
            catch{
                alert("Stack size exceeded it's limit");
            }
        }
    }
});

//the recursive function that does the "bucket" action
function PaintBucket(x, y, Data, r, g, b, a, fillCol) {
    if (x >= 0 && x < Canvas.width && y >= 0 && y < Canvas.height) {
        var pos = y * Canvas.width * 4 + x * 4;

        if (Math.abs(Data.data[pos] - r) < Graphics.lineWidth && Math.abs(Data.data[pos + 1] - g) < Graphics.lineWidth && Math.abs(Data.data[pos + 2] - b) < Graphics.lineWidth && Math.abs(Data.data[pos + 3] - a) < Graphics.lineWidth && (Data.data[pos] != fillCol.r || Data.data[pos + 1] != fillCol.g || Data.data[pos + 2] != fillCol.b)) {
        //if (Data.data[pos] == r && Data.data[pos + 1] == g && Data.data[pos + 2] == b && Data.data[pos + 3] != 0) { ***future option***
            Data.data[pos] = fillCol.r;
            Data.data[pos + 1] = fillCol.g;
            Data.data[pos + 2] = fillCol.b;
            Data.data[pos + 3] = 255;

            try {
                PaintBucket(x + 5, y, Data, r, g, b, a, fillCol);
            } finally {
                try {
                    PaintBucket(x - 5, y, Data, r, g, b, a, fillCol);
                } finally {
                    try {
                        PaintBucket(x, y + 5, Data, r, g, b, a, fillCol);
                    } finally {
                        try {
                            PaintBucket(x, y - 5, Data, r, g, b, a, fillCol);
                        } catch{
                            
                        }
                    }
                }
            }
        }
    }
}

//translates hex value to an object with 3 attributes: r, g, b
function HexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    };
}

//happens when the user stops holding the mouse button
//does what is needed to finish the wanted drawing action
Canvas.addEventListener("mouseup", function (event) {
    Canvas.onmousemove = null;
    getMousePosition(Canvas, event, false);
    if (ChosenShape != "brush" && ChosenShape != "eraser" && ChosenShape != "colorPicker" && ChosenShape != "bucket") {
        var image = document.createElement("img");
        image.src = IMG;
        image.onload = function () {
            Graphics.drawImage(image, 0, 0);
            Draw(ChosenShape);
        }
    }
    else if (ChosenShape == "brush" || ChosenShape == "eraser") {
        Draw(ChosenShape);
    }
});

//checks for user clicks in the "import" button
document.getElementById('import').addEventListener('input', Import);
//allows importing an image in the form of a text file that was Exported earlier
function Import(event) {

    var files = event.target.files;
    var file = files[0];
    if (files.length == 1) {
        Graphics.clearRect(0, 0, Canvas.width, Canvas.height);
        var reader = new FileReader();
        reader.onload = function (event) {
            backImage.src = event.target.result;
            var image = document.createElement("img");
            image.src = event.target.result;
            image.onload = function () {
                Graphics.drawImage(image, 0, 0);
            }
        }
        reader.readAsText(file)
    }
}

//saves a text file with the image that's on the canvas in it
function Export() {

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(Canvas.toDataURL()));
    element.setAttribute('download', "img");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

//called when the user clicks one of the color buttons above the canvas
//changes both the fill and stroke color to the desired color
function ChangeColor(color){
    var col = "";
    switch (color) {
        case "black": col = "#000000"; break;
        case "darkgray": col = "#696969"; break;
        case "gray": col = "#808080"; break;
        case "lightgray": col = "#D3D3D3"; break;
        case "white": col = "#ffffff"; break;

        case "red": col = "#ff1100"; break;
        case "orange": col = "#FFA500"; break;
        case "yellow": col = "#FFFF00"; break;

        case "purple": col = "#800080"; break;
        case "darkblue": col = "#000080"; break;
        case "blue": col = "#0000ff"; break;
        case "lightblue": col = "#00BFFF"; break;

        case "darkpink": col = "#C71585"; break;
        case "pink": col = "#FF69B4"; break;
        case "lightpink": col = "#FFC0CB"; break;

        case "darkgreen": col = "#006400"; break;
        case "green": col = "#00b400"; break;
        case "lightgreen": col = "#7CFC00"; break;
	
        case "darkbrown": col = "#8B4513"; break;
        case "brown": col = "#b4522d"; break;
        case "gold": col = "#FFD700"; break;
            
        case "turquoise": col = "#40E0D0"; break;

    }

    Graphics.strokeStyle = col;
    Graphics.fillStyle = col;
    label1.style.backgroundColor = col;
    label2.style.backgroundColor = col;

}