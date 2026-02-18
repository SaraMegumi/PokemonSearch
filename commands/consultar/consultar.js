const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { pokemonTcgApiKey } = require('../../config.json');
const { default: axios } = require('axios');


module.exports = {
	data: new SlashCommandBuilder().setName('consultar').setDescription('Consulta o valor de uma carta de Pokémon')
	.addStringOption(option => option
	.setName('parametro')
	.setDescription('nome (ex: Eevee ex) ou ID da carta (ex: 075/131)')
	.setRequired(true)),


	async execute(interaction) {
		const cardId = interaction.options.getString('parametro');
		
		await interaction.deferReply();

		try {

			const response = await axios.get(
				`https://api.pokewallet.io/search?q=${cardId}`,
				{
					headers: {
						'X-Api-Key': pokemonTcgApiKey
					}
				}
			)

			const resultado = response.data.results ?? [];
			if (resultado.length === 0) {
				await interaction.editReply('Carta não encontrada!');
				return;
			}

			let string = '';
			for(let i=0; i<resultado.length; i++) {
				let pokemon = resultado[i];

				const nomePokemon = (pokemon.card_info?.name);
				const idPokemon = (pokemon.card_info?.card_number);
				const valorPokemon = (pokemon.tcgplayer?.prices.market_price);
				const raridadePokemon = (pokemon.card_info?.rarity);

			
			if(nomePokemon){
				string += ' - ' + nomePokemon;
			}

			if(idPokemon){
				string += ' - ' + idPokemon;
			}

			if(valorPokemon){
				string += ' - $ ' + valorPokemon;
			}

			if(raridadePokemon){
				string += ' - ' + raridadePokemon;
			}

			string += '\n';


			}
			await interaction.editReply(string);
		} catch(error) {
			await interaction.editReply('Erro ao buscar carta');
			console.error('Erro ao buscar carta:', error);
		}

	}
}