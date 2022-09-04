import React, { useContext } from "react";
import { TransactionContext } from "../Controller/TransactionContext";


import { AiFillAlipayCircle } from "react-icons/ai"; 
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

import { Loader} from '.';

const commonStyles =  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({placeholder, name, type, value, handleChange}) => (
    <input
        placeholder={placeholder}
        type = {type}
        step = "0.0001"
        value = {value}
        onChange = {(e) => handleChange(e, name)}
        className= "my-2 w-full rounded-m p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism "
    />
);

const Welcome = () => {
   
    const { connectWallet, currentAccount, formData, sendTransaction, handleChange} = useContext( TransactionContext );

    const handleSubmit = (e) =>{

        const { addressTo, amount, keyword, message } = formData;

        e.preventDefault();

        if(!addressTo || !amount || !keyword || !message) return;

        sendTransaction();
        
    }

    return (       
        <div className = "flex w-full justify-center items-center">
            
            <div className = "flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                
                <div className=" flex flex-1 justify-start  flex-col mf:mr-10">
                    
                    <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
                        Transact Crypto <br /> all over the globe
                    </h1>
                    <p className = "text-left mt-5 text-white folt-light md:w-9/12 w-11/12 text-base">

                        Discover the cryptosphere. Use ECASH to buy and trade cryptocurrencies quickly.
                    

                    

                    </p>
                        {!currentAccount && (
                        <button
                            type="button"
                            onClick={connectWallet}
                            className="flex flex-row justify-center items-center my-5 bg-[#FFCF00] p-3 rounded-full cursor-pointer hover:bg-[#d2d4bc]"
                            >
                            <p className="text-black text-base font-semibold">
                                Login / Connect Wallet
                            </p>
                        </button>
                    )}


                    

                    <div className="grid sm:grid-cols-3 grid-cols-3 w-full mt-10">
                        
                         <div className= {`rounded-tl-2xl ${commonStyles}`} >
                            Dependability
                        </div>
                        
                        <div className={commonStyles}>
                            Web 3.0
                        </div>
                        
                        <div className={`sm:rounded-tr-2xl ${commonStyles}`}>
                            Ethereum
                        </div> 
                        
                        <div className={`sm:rounded-bl-2xl ${commonStyles}`}>
                            
                            Security
                        </div>
                        
                        <div className={commonStyles}>
                            Omtimal Fees
                        </div>

                        <div className={`sm:rounded-br-2xl ${commonStyles}`}>
                            Blockchain Technology
                        </div>     
                    </div>
                </div>
                
                 <div className="flex flex-col flex-1 items-center justify w-full mf:mt-0 mt-10">
                    <div className="p-3 flex justify-end items-start flex-col rounded-2xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism">
                        <div className="flex justify-between flex-col w-full h-full">
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 rounded-full border-2 border-[#080a33] flex justify-center items-center">
                                    <SiEthereum fontSize={30} color="#080a33" />
                                </div>
                                <BsInfoCircle fontSize = {17} color = "#080a33" />
                            </div>
                            <div>
                                <p className="text-blue  text-sm">
                                    Wall-Address
                                </p>
                                <p className="text-blue font-bold text-sm">
                                    Digital Crypto Card
                                </p>
                            </div>
                        </div>
                    </div> 
                    <div className="p-5 sm:w-96 w-full flex flex-col justify-center blue-glassmorphism">
                        <Input placeholder = "Address To" name = "addressTo" type= "text"  handleChange = {handleChange} />
                        <Input placeholder = "Amount (Eth)" name = "amount" type= "number" handleChange = {handleChange} />
                        <Input placeholder = "Subject (Txt)" name = "keyword" type= "text" handleChange = {handleChange} />
                        <Input placeholder = "Enter Message (Txt)" name = "message" type= "text" handleChange = {handleChange} />

                        <div className="h-[1px] w-full bg-gray-400 my-2"/>
                        {false ? (
                             <Loader />
                          ) : (
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                            >
                            Send Now 
                            </button>
                        )}

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Welcome;





































// // Here I have imported a few icons
// import React, { useContext } from 'react'; 
// import { AiFillAlipayCircle } from "react-icons/ai"; 
// import { SiEthereum } from 'react-icons/si';
// import { BsInfoCircle } from 'react-icons/bs';

// import { TransactionContext } from "../context/TransactionContext"; 

// // importing loaded so that we later on when something get loaded here, we can import that from dot slash ('./')
// import { Loader} from './';

// const commonStyles =  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

// const Input = ({placeholder, name, type, value, handleChange}) => (
//     <input
//         placeholder={placeholder}
//         type = {type}
//         step = "0.00001"
//         value = {value}
//         onChange = {(e) => handleChange(e, name)}
//         className= "my-2 w-full rounded-m p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism "
//     />
// );

// const Welcome = () => {

//     const { connectWallet } = useContext(TransactionContext);

//     const handleSubmit = () =>{

//     }

//     return (
//         // This is centering the entire welcome part
//         <div className = "flex w-full justify-center items-center">
            
//             <div className = "flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                
//                 <div className=" flex flex-1 justify-start  flex-col mf:mr-10">
                    
//                     <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
//                         Send Crypto <br /> all over the globe
//                     </h1>
//                     <p className = "text-left mt-5 text-white folt-light md:w-9/12 w-11/12 text-base">

//                         Discover the cryptosphere. Use ECASH to buy and trade cryptocurrencies quickly.
                    
//                     </p>
//                     <button
//                         type = "button"
//                         onClick = {connectWallet}
//                         className = "flex flex-row justify-center items-start my-5 bg-[#FFCF00] p-3 rounded-full cursor-poiter hover:bg-[#DFD3BE]">
                    
//                     <p className="text-black text-base font-semibold">
//                         Connect Wallet
//                     </p>
                    
//                     </button>
//                     <div className="grid sm:grid-cols-3 grid-cols-3 w-full mt-10">
                        
//                         <div className= {`rounded-tl-2xl ${commonStyles}`} >
//                             Reliability
//                         </div>
                        
//                         <div className={commonStyles}>
//                             Security
//                         </div>
                        
//                         <div className={`sm:rounded-tr-2xl ${commonStyles}`}>
//                             Ethereum
//                         </div>
                        
//                         <div className={`sm:rounded-bl-2xl ${commonStyles}`}>
//                             Web 3.0
//                         </div>
                        
//                         <div className={commonStyles}>
//                             Low Fees
//                         </div>

//                         <div className={`sm:rounded-br-2xl ${commonStyles}`}>
//                             Blockchain
//                         </div>    
//                     </div>
//                 </div>
                
//                 {/* This div is for modifying and implementing the card in the right of my welcome page*/}
                
//                  <div className="flex flex-col flex-1 items-center justify w-full mf:mt-0 mt-10">
//                     <div className="p-3 flex justify-end items-start flex-col rounded-2xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism">
//                         <div className="flex justify-between flex-col w-full h-full">
//                             <div className="flex justify-between items-start">
//                                 <div className="w-10 h-10 rounded-full border-2 border-[#FFCF00] flex justify-center items-center">
//                                     <SiEthereum fontSize={25} color="#FFCF00" />
//                                 </div>
//                                 <BsInfoCircle fontSize = {17} color = "#FFCF00" />
//                             </div>
//                             <div>
//                                 <p className="text-white font-light text-sm">
//                                     Address
//                                 </p>
//                                 <p className="text-white font-bold text-sm">
//                                     Ethereum
//                                 </p>
//                             </div>
//                         </div>
//                     </div> 
//                     <div className="p-5 sm:w-96 w-full flex flex-col justify-center blue-glassmorphism">
//                         <Input placeholder = "Address To" name = "addressTo" type= "text" handleChange = {() => {}} />
//                         <Input placeholder = "Amount (ETH)" name = "amount" type= "number" handleChange = {() => {}} />
//                         <Input placeholder = "Keyword (Gif)" name = "keyword" type= "text" handleChange = {() => {}} />
//                         <Input placeholder = "Enter Message" name = "message" type= "text" handleChange = {() => {}} />

//                         <div className="h-[1px] w-full bg-gray-400 my-2"/>
//                         {false ? (
//                              <Loader />
//                           ) : (
//                             <button
//                                 type="button"
//                                 onClick={handleSubmit}
//                                 className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
//                             >
//                             Send Now 
//                             </button>
//                         )}

//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// }

// export default Welcome;

