import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Image } from "@mui/icons-material";
import { Container, Input, InputGroup, Select, LabelUpload, Label, Form, SubmitButton, ErrorMessage,ContainerCheckBox } from "./styles";
import { useEffect, useState } from "react";
import { api } from '../../../services/api'
import { toast } from "react-toastify";
import { useLocation,useNavigate} from "react-router-dom";

const schema = yup.object({
    name: yup.string().required('Digite o nome do produto'),
    price: yup.number().positive()
        .required('Digite o preço do produto')
        .typeError('Digite o preço do produto'),
    category: yup.object().required('Escolha uma categoria '),
  offer: yup.bool(),
})

export function EditProduct() {
    const [fileName, setFileName] = useState(null);
    const [categories, setCategories] = useState([]);

const navigate = useNavigate();

const location = useLocation();
const product = location.state?.product; 
useEffect(() => {
    if (!product) {
        navigate("/admin/produtos"); // Redireciona para a lista de produtos
    }
}, [product, navigate]);

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');
            setCategories(data)
        }
        loadCategories()
    }, [])
    const { register, handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = async (data) => {
        const productFormData = new FormData();
        productFormData.append('name', data.name)
        productFormData.append('price', data.price * 100)
        productFormData.append('category_id', data.category.id)
        productFormData.append('file', data.file[0])
        productFormData.append('offer',data.offer);

        await toast.promise(api.put(`/products/${product.id}`, productFormData), {

            pending:'Editando o produto...',
            success:'Produto editado com sucesso',
            error:'Falha ao editar o produto, tente novamente',
        });
        setTimeout(() => {
            navigate('/admin/produtos');
        }, 2000);
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup>
                    <Label>Nome</Label>
                  <Input type="text" {...register("name")} defaultValue={product?.name || ""} />

                    <ErrorMessage>{errors?.name?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <Label>Preço</Label>
                    <Input type="number"{...register("price")} defaultValue={product.price / 100}  />
                    <ErrorMessage>{errors?.price?.message}</ErrorMessage>

                </InputGroup>

                <InputGroup>
                    <LabelUpload>
                        <Image />
                        <input type="file" {...register("file")}
                            accept="image/png, image/jpeg"
                            onChange={(value) => {

                                setFileName(value?.target?.files[0]?.name)
                                register('file').onChange(value)
                            }}
                        />
                        {fileName || 'Upload do Produto'}

                    </LabelUpload>
                    <ErrorMessage>{errors?.file?.message}</ErrorMessage>
                </InputGroup>


                <InputGroup>
                    <Label>Categoria</Label>

                    <Controller
                        name="category"
                        control={control}defaultValue={product.category } 
                        render={({field}) => (


                            <Select
                                {...field}
                                options={categories}
                                getOptionLabel={(category) => category.name}
                                getOptionValue={(category) => category.id}
                                placeholder="Categorias"
                                menuPortalTarget={document.body}
                            />
                        )}
                    />
                    <ErrorMessage>{errors?.category?.message}</ErrorMessage>

                </InputGroup>
                
                <InputGroup>
    <Controller
        name="offer"
        control={control}
        defaultValue={product?.offer || false}
        render={({ field }) => (
            <ContainerCheckBox>
                <input type="checkbox" {...field} checked={field.value} onChange={(e) => field.onChange(e.target.checked)} />
                <Label>Produto em Oferta</Label>
            </ContainerCheckBox>
        )}
    />
</InputGroup>


                <SubmitButton>Editar Produto</SubmitButton>
            </Form>
        </Container>
    )
}