import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ChatPort from './ChatPort'
import {AppBar, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Link} from '@mui/material'
import ParagraphPage from './ParagraphPage'
import ErrorPage from "./ErrorPage";
import Contact from "./Contact";

import {
  createBrowserRouter,
  Link as RouterLink,
  RouterProvider,
  Routes,
  Route
} from "react-router-dom";
import AppDrawer from './AppDrawer';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <ParagraphPage></ParagraphPage>,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "contacts/:contactId",
//     element: <Contact />,
//   },
// ]);


export default function App() {

  const drawerWidth = 240

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>

      <AppDrawer drawerWidth={drawerWidth} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Routes>
          <Route path="/" element={<ParagraphPage />} />
          <Route path="/contact/1" element={<Contact />} />
          <Route path="/ChatPort" Component={ChatPort} />
          <Route path="/visx" Component={ChatPort} />
        </Routes>
      </Box>
    </Box>
  )
}
