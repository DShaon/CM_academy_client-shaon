import { useContext } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';


const DashboardTopNav = () => {
    const {user} =useContext(AuthContext);


    
    return (
        <div>
                <div className='p-5 bg-gray-100 rounded-md lg:px-32 lg:h-40 flex flex-col
             items-center  lg:flex-row gap-5'>
                <div >
                    <h1 className='font-extrabold text-2xl lg:text-3xl font-serif 
                        text-center mt-5 tracking-wider'>Hello ! {user?.displayName}</h1>
                    <p className='lg:tracking-widest text-gray-700 text-center mt-4
                        text-sm font-semibold'>It is good to see you again.</p>
                </div>
                <img className='mx-auto h-32' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmbcpCukOqE7FyWrWXLFMqhnMYSxFUvbp8jg&usqp=CAU" alt="" />

                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="input input-bordered" />
                        <button className="btn bg-[#12C29F] btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardTopNav;

