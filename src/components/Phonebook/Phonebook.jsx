// library
import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

// components
import { Section } from "../Section/Section";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import { Form } from "./Form/Form";

// data
import initialContacts from "../../data/contactsInitial.json";

// style
import { DeskPhonebook } from "./Phonebook.styled";




export const Phonebook = () => {
  
  // load data with LS or preInitial
  const loadData = () => { 
    try {
      const list = localStorage.getItem('contacts');
      const savedContacts = JSON.parse(list);

      return savedContacts ?? initialContacts;

    } catch (error) {
      console.log('Cann`t load data without LocalStorage');
      return [];
    }
  }

  // create new Id
  const createId = () => { return nanoid(); }

  // state 
  const [contacts, setContacts] = useState(loadData());
  const [filter, setFilter] = useState('');


  //   componentDidUpdate -> function, [monitoring state value]
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  // Click onSubmitForm
  const onSubmitForm = (contact) => {
    if (isFound(contact.name)) {
      alert(`${contact.name} - find in numberbook base`);
      return;
    }

    const newContact = { id: createId(), ...contact };
    setContacts((prev) => [newContact, ...prev] )
  }

  // isFound
  const isFound = (name) => {
    const findName = name.trim().toLowerCase();

    return contacts.some(item => item.name.toLowerCase() === findName)
  }

  // Filter
  const onChangeFilter = e => {
    setFilter( e.currentTarget.value );
  }


  const getVisibleContacts = () => {
    const nomaliseFilter = filter.toLowerCase();

    return contacts.filter(
      item => item.name.toLowerCase().includes(nomaliseFilter));
  }


  // delete item without ContactsList
  const onDeleteItem = (id) => {
    setContacts((prev) => prev.filter(item => item.id !== id) )
  }


  const outFilter = getVisibleContacts();
  return (
    <DeskPhonebook>
      <Section title={"Phonebook: HW-4 Hook"}>
        <Form
          onSubmit={onSubmitForm}
        />
      </Section>
        
      <Section>
        <Filter
          value={filter}
          onFilter={onChangeFilter}
        />
      </Section>
      
      <Section title={"Contacts"}>
        <ContactsList
          contacts={outFilter}
          onDelete={onDeleteItem}
        />
      </Section>
    </DeskPhonebook>
  )
}
