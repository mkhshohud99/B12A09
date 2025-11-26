import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';

const Profile = () => {

    const { user, setUser } = useContext(AuthContext)

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenForm = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;

        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
        }).then(() => {
            setUser({ ...user, photoURL: photoUrl, displayName: name })
        }).catch((err) => {
            alert(err)
        });
    }
    return (
        <div className='flex flex-col justify-center items-center w-full gap-5  mt-10'>
            <div className="avatar">
                <div className=" h-[150px] w-[150px] rounded-full">
                    <img className='text-center' src={user?.photoURL} />
                </div>
            </div>
            <p>{user?.displayName}</p>
            <p>{user?.email}</p>
            <button onClick={handleOpenForm} className="btn">Update Profile</button>
            {
                isOpen && (
                    <form onSubmit={handleUpdate} className="fieldset">
                        <label className="label">Name</label>
                        <input defaultValue={user?.displayName} name='name' type="text" className="input" placeholder="Your Name" />
                        <label className="label">PhotoURL</label>
                        <input defaultValue={user?.photoURL} name='photoUrl' type="text" className="input" placeholder="Past PhotoURL" />
                        <button className="btn btn-neutral mt-4">Update</button>
                    </form>
                )
            }

        </div>
    );
};

export default Profile;