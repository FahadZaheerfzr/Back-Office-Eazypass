import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer'
const initialRows = {
  rows: [
    {
        id: 0,
        nom: 'MURLO Franck',
        date: 'Dec 1, 2022',
        fanction: 'Chargé de communication',
        service: 'Marketing',
        days:"5 j non déclarés",
        warning:"Envoyé",
        semaine: "22eme semaine 2022",
        teletravail: 'Fixe 2 jours/semaine',
        assurance: 'Valide',
        address: 'Siège de Boves 4 rue des indes noires 80440 Boves',
        telephone: '+33(0)613963922',
        mail: 'louise.garot@eazypass.fr',
    },
    {
        id: 1,
        nom: 'MURLO Franck',
        date: 'Dec 1, 2022',
        fanction: 'Chargé de communication',
        service: 'Marketing',
        warning:"Ne pas envoyer",
        days:"5 j non déclarés",
        semaine: "73e semaine 2022",
        teletravail: 'Télétravail ponctuel',
        assurance: 'Envoyée',
        address: 'Siège de Boves 4 rue des indes noires 80440 Boves',
        telephone: '+33(0)613963922',
        mail: 'louise.garot@eazypass.fr',
    },
    {
        id: 2,
        nom: 'MURLO Franck',
        date: 'Dec 1, 2022',
        days:"3 j non déclarés",
        warning:"Envoyer ?",
        fanction: 'Chargé de communication',
        service: 'Marketing',
        semaine: "13eme semaine 2022",
        teletravail: 'Libre 3 jours/ semaine',
        assurance: 'Non envoyée',
        address: 'Siège de Boves 4 rue des indes noires 80440 Boves',
        telephone: '+33(0)613963922',
        mail: 'louise.garot@eazypass.fr',
    },
    {
        id: 3,
        nom: 'MURLO Franck',
        date: 'Dec 1, 2022',
        fanction: 'Chargé de communication',
        service: 'Marketing',
        warning:"Ne pas envoyer",
        days:"5 j non déclarés",
        semaine: "13eme semaine 2022",
        teletravail: 'Libre et illimité',
        assurance: 'Valide',
        address: 'Siège de Boves 4 rue des indes noires 80440 Boves',
        telephone: '+33(0)613963922',
        mail: 'louise.garot@eazypass.fr',
    },
    {
      id: 4,
      nom: 'Garot Louise',
      date: 'Oct 15, 2022',
      fanction: 'Web Designer',
      service: 'Marketing',
      warning:"Ne pas envoyer",
      days:"5 j non déclarés",
      semaine: "13eme semaine 2022",
      teletravail: 'Fixe 2 jours/semaine',
      assurance: 'Valide',
      address: 'Siège de Boves 4 rue des indes noires 80440 Boves',
      telephone: '+33(0)613963922',
      mail: 'louise.garot@eazypass.fr',
  },
  ],
}


export const CollaboratorContext = createContext(initialRows)

export const CollaboratorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialRows);

  // Actions for changing state

  function addCollaborator(item) {
    dispatch({
      type: 'ADD_ITEM',
      payload: item,
    })
  }

  function removeCollaborator(item) {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: item
    })
  }

  return (

    <CollaboratorContext.Provider value={{
      rows: state.rows, addCollaborator, removeCollaborator
    }}>
      {children}
    </CollaboratorContext.Provider>
  )
}