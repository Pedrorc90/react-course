import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { Grid, Typography, Button, TextField, IconButton } from "@mui/material";
import ImageGallery from "../components/ImageGallery";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useRef } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startDeletingNote, startSaveNote, startUploadingFiles } from "../../store/journal/thunks";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';


const NoteView = () => {

    const dispatch = useDispatch();
    const { active:note, messageSaved, isSaving } = useSelector( state => state.journal )
    const { body, title, date, onInputChange, formState } = useForm( note )

    const dateString = useMemo( () => {
        const newDate = new Date( date )
        return newDate.toUTCString();
    }, [ date ] )

    const fileInputRef = useRef();

    useEffect(() => {
        dispatch( setActiveNote( formState ) )
    }, [ formState ]);

    useEffect(() => {
        if ( messageSaved.length > 0 ) {
            Swal.fire('Note updated', messageSaved, 'success')
        }
    }, [ messageSaved ]);

    const onSaveNote = () =>  dispatch( startSaveNote() )
    
    const onFileInputChange = ( { target } ) => {
        if ( target.files === 0 ) return;
        dispatch( startUploadingFiles( target.files ) );
    }

    const onDelete = () => {
        dispatch( startDeletingNote() )
    }

    return ( 
        <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1, pl: 5 }}>
            <Grid item>
                <Typography fontSize={ 39 } fontWeight="light">{ dateString }</Typography>
            </Grid>
            <Grid item>

                <input type="file" multiple onChange={ onFileInputChange } style={{ display : 'none' }} ref={ fileInputRef }/>
                <IconButton color="primary" disabled={ isSaving } onClick={ () => fileInputRef.current.click() }>
                    <UploadOutlined />
                </IconButton>

                <Button color="primary" sx={{ padding: 2 }} onClick={ onSaveNote } disabled={ isSaving }>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} /> Save
                </Button>
            </Grid>

            <Grid container>
                <TextField type="text" variant="filled" fullWidth placeholder="Introduce a title" label="Title" sx={{ border: 'none', mb: 1 }} name="title" value={ title } onChange={ onInputChange } />
                <TextField type="text" variant="filled" fullWidth multiline placeholder="What happens today?" label="What happens today?" minRows={ 5 } name="body" value={ body } onChange={ onInputChange } />
            </Grid>

            <Grid container justifyContent='end'>
                <Button onClick={ onDelete } sx={{ mt:2 }} color="error" >
                    <DeleteOutline />  Delete  
                </Button>
                
            </Grid>

        <ImageGallery images={ note.imageUrls }/>
        </Grid>
     );
}
 
export default NoteView;