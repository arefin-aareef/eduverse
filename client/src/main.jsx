import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import AuthProvider from './Providers/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();



ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<QueryClientProvider client={queryClient}>
				<div className='max-w-screen-3xl min-h-screen mx-auto bg-slate-500'>
					<RouterProvider router={router} />
				</div>
			</QueryClientProvider>
		</AuthProvider>
	</React.StrictMode>
);
