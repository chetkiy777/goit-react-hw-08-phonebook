import { Contacts } from "components/Contacts/Contacts"
import { ContactForm } from "components/ContactForm/ContactForm"
import { Filter } from "components/Filter/Filter"

export const ContactPage = () => {
    return(
        <div>
            <h1>Phonebook</h1>
            <ContactForm />

            <h1>Contacts</h1>
            <Filter />

            <Contacts/>
        </div>
    )
}