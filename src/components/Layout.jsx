import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;

export default function AppLayout({ children }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div style={{ color: "#fff", fontSize: "1.25rem", fontWeight: 600 }}>
          Your Name
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["home"]}
          items={[
            { key: "home", label: <a href="#home">Home</a> },
            { key: "about", label: <a href="#about">About</a> },
            { key: "projects", label: <a href="#projects">Projects</a> },
            { key: "contact", label: <a href="#contact">Contact</a> },
          ]}
          style={{ marginLeft: "auto" }}
        />
      </Header>

      <Content style={{ padding: "2rem 4rem" }}>
        {children}
      </Content>

      <Footer style={{ textAlign: "center" }}>
        © {new Date().getFullYear()} Your Name
      </Footer>
    </Layout>
  );
}
