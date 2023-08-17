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
  
  // create new Id
  const createId = () => { return nanoid(); }

  // hook -> contacts 
  const [contacts, setContacts] = useState([]);

  // hook -> filter
  const [filter, setFilter] = useState('');

  // Click onSubmitForm
  const onSubmitForm = (contact) => {
    if (isFound(contact.name)) {
      alert(`${contact.name} - find in numberbook base`);
      return;
    }

    const newContact = { id: createId(), ...contact };
    setContacts( [newContact, ...contacts] )
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
    setContacts(( contacts.filter(item => item.id !== id) ))
  }


  //useEffect -> function, dataArray
  //   componentDidMount -> function, []
  //   componentWillUnmount -> return (function)  
  //   componentDidUpdate -> function, [monitoring state value]
  useEffect(() => {
    try {
      const list = localStorage.getItem('contacts');
      const savedContacts = JSON.parse(list);

      if (savedContacts) {
        setContacts(savedContacts);
      } else {
        setContacts(initialContacts);
      }

    } catch (error) {
      console.log('Cann`t load data without LocalStorage');
    }
  }, []);

  //   componentDidUpdate -> function, [monitoring state value]
  // перевірка з попереднім значенням робиться автоматично
  useEffect(() => {
    if (contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);


  const outFilter = getVisibleContacts();
  return (
    <DeskPhonebook>
      <Section title={"Phonebook"}>
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



// export class Phonebook extends Component {

//   state = {
//     contacts: [],
//     filter: '',
//   }

//   createId = () => { return nanoid(); }

//   onSubmitForm = (contact) => {

//     if (this.isFound(contact.name)) { 
//       alert(`${contact.name} - find in numberbook base`);
//       return;
//     }

//     const newContact = { id: this.createId(), ...contact };
//     this.setState(({ contacts }) => ({
//       contacts: [newContact, ...contacts],
//     }))
//   }

//   isFound = (name) => {
//     const { contacts } = this.state;
//     const findName = name.trim().toLowerCase();

//     return contacts.some(item => item.name.toLowerCase() === findName)
//   }

//   // Filter
//   onChangeFilter = e => { 
//     this.setState({ filter: e.currentTarget.value });
//   }

//   getVisibleContacts = () => { 
//     const { contacts, filter } = this.state;
//     const nomaliseFilter = filter.toLowerCase();

//     return contacts.filter(
//       item => item.name.toLowerCase().includes(nomaliseFilter));
//   }

//   // delete item without ContactsList
//   onDeleteItem = (id) => { 
//     this.setState(({ contacts }) => ({
//       contacts: contacts.filter(item => item.id !== id),
//     }))
//   }

//   componentDidMount() { 
//     try {
//       const list = localStorage.getItem('contacts');
//       const contacts = JSON.parse(list);
//     console.log(contacts);
//       if (contacts) {
//         this.setState({ contacts });
//       } else {
//         this.setState({ contacts: contactsInitial });
//       }

//     } catch (error) {
//       console.log('Cann`t load data without LocalStorage'); 
//     }
//   }

//   componentDidUpdate(preProp, preState) { 
//     const { contacts } = this.state

//     if (preState.contacts !== contacts) {
//       localStorage.setItem('contacts', JSON.stringify(contacts));
//     }
//   }

//   render() {
//     const { filter } = this.state;
//     const outFilter = this.getVisibleContacts();

//     return (
//       <DeskPhonebook>
//         <Section title={"Phonebook"}>
//           <Form
//            onSubmit={this.onSubmitForm}
//           />
//         </Section>
        
//         <Section>
//           <Filter
//             value = { filter }
//             onFilter={this.onChangeFilter}
//           />
//         </Section>
      
//         <Section title={"Contacts"}>
//           <ContactsList
//             contacts={ outFilter }
//             onDelete={this.onDeleteItem}
//           />
//         </Section>
//       </DeskPhonebook>
//     );
//   }
// }