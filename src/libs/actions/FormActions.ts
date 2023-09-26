import Onyx from 'react-native-onyx';
import {KeyValueMapping} from 'react-native-onyx/lib/types';
import {PartialDeep} from 'type-fest';
import {OnyxFormKey} from '../../ONYXKEYS';
import {Form} from '../../types/onyx';
import * as OnyxCommon from '../../types/onyx/OnyxCommon';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ExcludeDraft<T> = T extends `${infer R}Draft` ? never : T;
type OnyxFormKeyWithoutDraft = ExcludeDraft<OnyxFormKey>;

function setIsLoading(formID: OnyxFormKey, isLoading: boolean) {
    Onyx.merge(formID, {isLoading} satisfies Form);
}

function setErrors(formID: OnyxFormKey, errors: OnyxCommon.Errors) {
    Onyx.merge(formID, {errors} satisfies Form);
}

function setErrorFields(formID: OnyxFormKey, errorFields: OnyxCommon.ErrorFields) {
    Onyx.merge(formID, {errorFields} satisfies Form);
}

function setDraftValues<T extends OnyxFormKeyWithoutDraft>(formID: T, draftValues: PartialDeep<KeyValueMapping[`${T}Draft`]>) {
    Onyx.merge(`${formID}Draft`, draftValues);
}

export {setDraftValues, setErrorFields, setErrors, setIsLoading};
