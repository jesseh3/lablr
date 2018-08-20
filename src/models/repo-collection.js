import Collection from 'ampersand-rest-collection'
import Repo from './repo'
import githubMixin from '../helpers/github-mixin'

export default Collection.extend(githubMixin, {
  url: 'https://api.github.com/user/repos',

  model: Repo,

  getByFullName (fullName) {
    // "findwhere" is an & method on a Collection
    // below means "find a model where the model's full_name == the fullName value passed in the function call "
    let model = this.findWhere({full_name: fullName})

    if (!model) {
      model = new Repo({full_name: fullName})
    }

    model.fetch()

    return model
  },
})
