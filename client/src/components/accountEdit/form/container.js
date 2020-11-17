import React, {useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import baseService from '../../../services/baseService';

const FormEdit = function() {
    const { id: code } = useParams();
    const [account, setAccount] = useState({});
    const [acct_code, setAccountCode] = useState('');
    const [acct_name, setAccountName] = useState('');

    const saveAccount = (e) => {
        e.preventDefault();
        console.log(account.Code, account.Name);
        return baseService.updateAccount(account.Code, account.Name);
    }

    const onChangeAccountCode = (e) => {
        console.log(e.target.value);
    }

    const onChangeAccountName = (e) => {
        setAccountName(e.target.value);
        account.Name = e.target.value;
        account.Balance = 5000;
        setAccount(account);
    }

    const queryData = useCallback(async function () {
        try
        {
            let acct = await baseService.getAccountByCode(code);
            let { Code, Name } = acct;
            setAccount(acct);
            setAccountCode(Code);
            setAccountName(Name);
        }
        catch (err) {
          throw err;
        }
      }, [code]);
      
      useEffect(() => {
        queryData();
      },[queryData]);

    return (
        <Container className='form-full-screen'>
            <Form>
                <Form.Group controlId="formAcctCode">
                    <Form.Label>Account Code:{account.Code}</Form.Label>
                    <Form.Control type="text" placeholder="Enter account code" value={acct_code} onChange={onChangeAccountCode} />
                </Form.Group>
                <Form.Group controlId="formAcctName">
                    <Form.Label>Account Name:{account.Name}</Form.Label>
                    <Form.Control type="text" placeholder="Enter account name" value={acct_name} onChange={onChangeAccountName}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={saveAccount}>
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default FormEdit;