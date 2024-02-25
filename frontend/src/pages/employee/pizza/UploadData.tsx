import React, { useState, ChangeEvent } from 'react';
import { uploadDataPizza} from '@/lib/utils';
const UploadData: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0]);
        }
    };

    const addPizza = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        if (!file) {
            console.error('Please select a file');
            return;
        }
    
        const formData = new FormData();
        formData.append('file', file);
    
        try {
            await uploadDataPizza(formData);
            console.log('Pizzas uploaded successfully');
        } catch (error) {
            console.error('Error uploading pizzas:', error);
        }
    };

    return (
        <div>
            <form onSubmit={addPizza}>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Pick a file</span>
                        <span className="label-text-alt">JSON Files</span>
                    </div>
                    <input
                        type="file"
                        className="file-input file-input-bordered w-full max-w-xs"
                        onChange={handleFileChange}
                    />
                </label>
                <div className="flex justify-center">
                    <button type="submit" className="btn mt-4">
                        Upload Data
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UploadData;