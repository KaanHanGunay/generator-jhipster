/**
 * Copyright 2013-2022 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see https://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const MapperTypes = {
  MAPSTRUCT: 'mapstruct',
  NO: 'no',
};

const ServiceTypes = {
  SERVICE_CLASS: 'serviceClass',
  SERVICE_IMPL: 'serviceImpl',
  NO: 'no',
};

const PaginationTypes = {
  PAGINATION: 'pagination',
  INFINITE_SCROLL: 'infinite-scroll',
  NO: 'no',
};

const SearchTypes = {
  ELASTICSEARCH: 'elasticsearch',
  COUCHBASE: 'couchbase',
  NO: 'no',
};

const FilteringTypes = {
  JPA_METAMODEL: 'jpaMetamodel',
  NO: 'no',
};

export default {
  MapperTypes,
  ServiceTypes,
  PaginationTypes,
  SearchTypes,
  FilteringTypes,
};
