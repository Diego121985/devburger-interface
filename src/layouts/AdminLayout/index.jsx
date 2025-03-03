import { Outlet, Navigate } from "react-router-dom";
import { Container } from "./styles";
import { SideNavAdmin } from "../../components";

export function AdminLayout() {
    let isAdmin = false;

    try {
        const userData = localStorage.getItem('devburger:userData');
        if (userData) {
            const parsedData = JSON.parse(userData);
            isAdmin = parsedData.admin || false;
        }
    } catch (error) {
        console.error("Erro ao acessar os dados do usuário:", error);
    }

    return isAdmin ? (
        <Container>
            <SideNavAdmin />
            <main>
                <section>
                    <Outlet />
                </section>
            </main>
        </Container>
    ) : (
        <Navigate to="/login" />
    );
}
