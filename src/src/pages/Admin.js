import Sidebar from "../components/sidebar/sidebar";
import { userFields }  from "../constant";
import { Cards } from "../components/cards/card";
import { Table } from "../components/table/ticketsTable";
import { UpdateModal } from "../components/modal/ticketModal";
import { UsersTable } from "../components/table/usersTable";
import { UpdateUserModal } from "../components/modal/userModal";
import useFetchTickets from "../hooks/fetchTickets";
import useUpdateTickets from "../hooks/updateTickets";
import useFetchUsers from "../hooks/fetchUsers";
import useUpdateUsers from "../hooks/updateUsers";
import CreateTicketModal from "../components/modal/createTicketModal";
import useCreateTickets from "../hooks/createTickets";



function Admin(){

    const tickets = useFetchTickets();
    const {ticketsRowEvents, showTicketModal, closeTicketModal, selectedTicket, onUpdateTicket, onSaveTicket} = useUpdateTickets();

    const {onCreateNewTicket, showCreateTicketModal, closeCreateTicketModal, onUpdateNewTicket, onSaveNewTicket} = useCreateTickets();

    const users = useFetchUsers();
    const {usersRowEvents, showUserModal, closeUserModal, selectedUser, onUpdateUser, onSaveUser} = useUpdateUsers();

    const name = localStorage.getItem(userFields.name);

    return (
        <div className="row bg-light">
            <div className="col-1">
                <Sidebar/>
            </div>
            <div className="col p-2">
                <h4 className="text-center">Welcome, {name}!</h4>
                <p className="text-center text-muted">Streamline ticket management and improve customer satisfaction.</p>
                <Cards tickets={tickets}/>
                <hr/>
                <UsersTable users={users} rowEvents = {usersRowEvents}/>
                <UpdateUserModal show = {showUserModal} closeModal = {closeUserModal} user = {selectedUser} onUpdateUser = {onUpdateUser} onSaveUser = {onSaveUser}/>
                <hr/>
                <div className="d-flex justify-content-center">
                    <input className="btn btn-outline-dark pt-1 pb-1 my-2 w-50" type="button" onClick={onCreateNewTicket} value="RAISE TICKET"/>
                </div>
                <CreateTicketModal show = {showCreateTicketModal} closeModal = {closeCreateTicketModal}  onUpdateTicket = {onUpdateNewTicket} onSaveTicket = {onSaveNewTicket}/>
                <Table tickets={tickets} rowEvents = {ticketsRowEvents}/>
                <UpdateModal show = {showTicketModal} closeModal = {closeTicketModal} ticket = {selectedTicket} onUpdateTicket = {onUpdateTicket} onSaveTicket = {onSaveTicket}/>
            </div>
        </div>
    );
}

export default Admin;